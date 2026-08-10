const API_URL = import.meta.env.VITE_API_URL;

export async function getPlot(plotId : string) {

    const response = await fetch(
        `${API_URL}/plots/${plotId}`
    );
    if (response.status === 204) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Error al obtener la información de la parcela: " + response.statusText);
    }

    return await response.json();
}
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
export async function updatePlot(plotId: number, plot: any) {
    const response = await fetch(
        `${API_URL}/plots/${plotId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plot)
        }
    );

    if (response.status === 204) {
        return null;
    }

    if (!response.ok) {
        throw new Error(
            "Error al actualizar la parcela: " + response.statusText
        );
    }

    return await response.json();
}