import { useEffect, useState } from "react";
import type { Device, Sensor } from "../types/dashboard";
import { getEnvironmentSensor } from "../services/EnviromentSensorService";

export function useEnvironmentSensors(devices: Device[]) {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        async function load() {

            try {
                const sensors = await Promise.all(
                    devices.map(d => getEnvironmentSensor(d.id))
                );
            const availableSensors = sensors.filter(sensor => sensor !== null);

            if (availableSensors.length === 0) {
                setNoData(true);
                return;
            }
            setSensors(
                sensors.flatMap(sensor => [
                    {
                        deviceID: sensor.deviceID,
                        sensorName: "Temperatura",
                        value: sensor.temperature,
                        unit: "°C",
                        difference: 0,
                        timestamp: sensor.timestamp,
                        imagePath: "/temperature.png"
                    },
                    {
                        deviceID: sensor.deviceID,
                        sensorName: "Humedad",
                        value: sensor.humidity,
                        unit: "%",
                        difference: 0,
                        timestamp: sensor.timestamp,
                        imagePath: "/humidity.png"
                    }
                ])
            );
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
        error
        , noData
    };
}