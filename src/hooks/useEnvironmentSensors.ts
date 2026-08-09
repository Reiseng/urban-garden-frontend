import { useEffect, useState } from "react";

import type { Device } from "../types/devices";
import type { Sensor } from "../types/sensor";

import {
    getEnvironmentSensor,
    getEnvironmentSensorHistory
} from "../services/EnviromentSensorService";

import { formatDate } from "../utils/date";

export function useEnvironmentSensors(devices: Device[]) {

    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);


    useEffect(() => {

        async function load() {

            try {

                const results = await Promise.all(

                    devices.map(async device => {

                        /*
                         * Valor actual
                         */
                        const latest =
                            await getEnvironmentSensor(device.id);


                        /*
                         * Historial
                         */
                        const history =
                            await getEnvironmentSensorHistory(
                                device.id,
                                20
                            );


                        return {
                            latest,
                            history
                        };

                    })

                );


                const availableResults =
                    results.filter(
                        result => result.latest !== null
                    );


                if (availableResults.length === 0) {
                    setNoData(true);
                    return;
                }


                const newSensors: Sensor[] = [];


                availableResults.forEach(
                    ({ latest, history }) => {

                        /*
                         * Historial de temperatura
                         */
                        const temperatureHistory =
                            history.map(
                                (reading: any) => ({
                                    value: reading.temperature,
                                    timestamp: reading.timestamp
                                })
                            );


                        /*
                         * Historial de humedad
                         */
                        const humidityHistory =
                            history.map(
                                (reading: any) => ({
                                    value: reading.humidity,
                                    timestamp: reading.timestamp
                                })
                            );


                        newSensors.push({

                            deviceID: latest.deviceID,

                            sensorName: "Temperatura",

                            value: latest.temperature,

                            unit: "°C",

                            difference: 0,

                            timestamp:
                                    latest.timestamp,

                            imagePath:
                                "/temperature.png",

                            history:
                                temperatureHistory

                        });


                        newSensors.push({

                            deviceID: latest.deviceID,

                            sensorName: "Humedad",

                            value: latest.humidity,

                            unit: "%",

                            difference: 0,

                            timestamp:
                                formatDate(
                                    latest.timestamp
                                ),

                            imagePath:
                                "/humidity.png",

                            history:
                                humidityHistory

                        });

                    }
                );


                setSensors(newSensors);

            }
            catch {

                setError(true);

            }
            finally {

                setLoading(false);

            }

        }


        load();

    }, [devices]);


    return {
        sensors,
        loading,
        error,
        noData
    };
}