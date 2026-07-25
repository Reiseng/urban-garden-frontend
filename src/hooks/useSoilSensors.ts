import { useEffect, useState } from "react";
import type { Device, Sensor } from "../types/dashboard";
import { getSoilSensor } from "../services/SoilSensorService";
import { formatDate } from "../utils/date";

export function useSoilSensors(devices: Device[]) {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);
    useEffect(() => {
        async function load() {

            try {
                const responses = await Promise.all(
                    devices.map(d => getSoilSensor(d.id))
                );

                const availableSensors = responses
                    .filter(r => r !== null)
                    .flat();

                if (availableSensors.length === 0) {
                    setNoData(true);
                    return;
                }
                setSensors(
                    availableSensors.flatMap(device =>
                        device.sensors.map((sensor: { sensorIndex: number; moisture: any; }) => ({
                            deviceID: device.deviceID,
                            sensorName: `Humedad Suelo ${sensor.sensorIndex + 1}`,
                            value: sensor.moisture,
                            unit: "RAW",
                            difference: 0,
                            timestamp: formatDate(device.timestamp),
                            imagePath: "/soil.png"
                        }))
                    )
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
        error,
        noData
    };
}