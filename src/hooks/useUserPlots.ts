import { useEffect, useState } from "react";
import { getUserPlots } from "../services/UserPlotService";
import type { PlotInfo } from "../types/plotinfo";

export function useUserPlots() {
    const [userplotInfo, setUserplotInfo] = useState<PlotInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const plots = await getUserPlots();
                if (plots) {
                    setUserplotInfo(plots);
                }
            }
            catch {
                setError(true);
            }
            finally {
                setLoading(false);
            }
        }

        load();
    }
        , []);

    return {
        userplotInfo,
        loading,
        error
    };
}