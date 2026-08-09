import { useEffect, useState } from "react";
import type { Device } from "../types/devices";

export function useDevices() {
    const [devices, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                // TODO API

                setDevices([
                    {
                        id: "123456",
                        name: "Dispositivo 1",
                        status: "Conectado",
                        lastSeenAt: "01/02/2024 12:00"
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
        devices,
        loading,
        error
    };
}