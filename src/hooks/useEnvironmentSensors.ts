import { useEffect, useState } from "react";
import type { Sensor } from "../types/dashboard";

export function useEnvironmentSensors() {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {

            try {
                setSensors([
                    {
                        deviceID: "123456",
                        sensorName: "Temperatura",
                        value: 25,
                        unit: "°C",
                        difference: 1,
                        timestamp: "01/02/2024",
                        imagePath: "/temperature.png"
                    },
                    {
                        deviceID: "123456",
                        sensorName: "Humedad",
                        value: 60,
                        unit: "%",
                        difference: -3,
                        timestamp: "01/02/2024",
                        imagePath: "/humidity.png"
                    }
                ]);
            }
            catch {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    return {
        sensors,
        loading,
        error
    };
}