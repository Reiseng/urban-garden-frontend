const API_URL = import.meta.env.VITE_API_URL;

export async function getUserPlots() {

    const response = await fetch(
        `${API_URL}/plots/`
    );

    if (response.status === 204) {
        return null;
    }

    if (!response.ok) {
        throw new Error(
            "Error al obtener las parcelas: " + response.statusText
        );
    }

    return await response.json();
}