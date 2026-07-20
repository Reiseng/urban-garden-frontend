export async function getPlot(plotId: string = "1") {

    const response = await fetch(
        "http://localhost:5000/api/v1/plots/" + plotId
    );
    if (response.status === 204) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Error al obtener la información de la parcela: " + response.statusText);
    }

    return await response.json();
}