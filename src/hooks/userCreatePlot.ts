import { useState } from "react";
import { postPlot } from "../services/NewPlotService";

export function useCreatePlot() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createPlot = async (plot: any) => {

        try {
            setLoading(true);
            setError(null);

            const createdPlot = await postPlot(plot);

            return createdPlot;

        } catch (error) {

            setError(
                error instanceof Error
                    ? error.message
                    : "Error desconocido"
            );

            return null;

        } finally {
            setLoading(false);
        }
    };

    return {
        createPlot,
        loading,
        error
    };
}