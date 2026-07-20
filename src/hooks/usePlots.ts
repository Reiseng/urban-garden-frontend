import { useEffect, useState } from "react";
import type { PlotInfo} from "../types/dashboard";
import { getPlot } from "../services/PlotService";

export function usePlots() {
    const [plotInfo, setPlotInfo] = useState<PlotInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const plot = await getPlot();
                setPlotInfo({
                    id: plot.id,
                    name: plot.name,
                    location: `${plot.location.state}, ${plot.location.city}`,
                    area: plot.size,
                    activeCrops: plot.plantedCrops,
                    devices: plot.devices
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