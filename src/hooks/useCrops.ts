import { useEffect, useState } from "react";

// Local Crop type: moved here because ../types/dashboard does not export Crop
type Crop = {
    name: string;
    plantingDate: string;
    status: string;
};

export function useCrops() {
    const [crops, setCrops] = useState<Crop[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                setCrops([
                    {
                        name: "Tomate",
                        plantingDate: "01/01/2024",
                        status: "Creciendo"
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
        crops,
        loading,
        error
    };
}