import { useEffect, useState } from "react";
import type { PlotInfo} from "../types/dashboard";

export function usePlots() {
    const [plotInfo, setPlotInfo] = useState<PlotInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                setPlotInfo({
                    name: "Invernadero",
                    plotName: "Parcela 1",
                    location: "Madrid, España",
                    area: 50
                });
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
        plotInfo,
        loading,
        error
    };
}