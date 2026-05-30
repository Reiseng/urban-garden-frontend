import { useEffect, useState } from "react";
import type { Sensor } from "../types/dashboard";

export function useSoilSensors() {

    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        async function load() {

            try {
                setSensors([
                    {
                        deviceID: "123456",
                        sensorName: "Humedad Suelo",
                        value: 45,
                        unit: "%",
                        difference: 5,
                        timestamp: "01/02/2024",
                        imagePath: "/soil.png",
                        sensorIndex: 1
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