import { useEffect, useState } from "react";
import type { Device, Sensor } from "../types/dashboard";
import { getSoilSensor } from "../services/SoilSensorService";

export function useSoilSensors(devices: Device[]) {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [noData, setNoData] = useState(false);
    useEffect(() => {
        async function load() {

            try {
                const sensors = await Promise.all(
                    devices.map(d => getSoilSensor(d.id))
                );
                const availableSensors = sensors.filter(sensor => sensor !== null);

                if (availableSensors.length === 0) {
                    setNoData(true);
                    return;
                }
                setSensors(
                    sensors.map((sensor, index) => ({
                        deviceID: devices[index].id,
                        sensorName: "Humedad Suelo",
                        value: sensor.value,
                        unit: "RAW",
                        difference: sensor.difference,
                        timestamp: sensor.timestamp,
                        imagePath: "/soil.png"
                    }))
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