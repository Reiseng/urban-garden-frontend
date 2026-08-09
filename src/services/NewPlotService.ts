const API_URL = import.meta.env.VITE_API_URL;

export async function postPlot(plot: any) {
    const response = await fetch(
        `${API_URL}/plots`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plot)
        }
    );

    if (!response.ok) {
        throw new Error(
            "Error al crear la parcela: " + response.statusText
        );
    }

    return await response.json();
}