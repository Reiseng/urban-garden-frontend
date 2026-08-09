import { useEffect, useState } from "react";
import type { PlotInfo} from "../types/plotinfo";
import { getPlot } from "../services/PlotService";

export function usePlots(plotId: string) {
    const [plotInfo, setPlotInfo] = useState<PlotInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {


        async function load() {
            try {
                const plot = await getPlot(plotId);
                setPlotInfo({
                    id: plot.id,
                    name: plot.name,
                    location: plot.location,
                    size: plot.size,
                    plantedCrops: plot.plantedCrops,
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