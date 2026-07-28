export async function getEnvironmentSensor(deviceId: string) {

    const response = await fetch(
        "https://urban-garden-api.onrender.com/api/v1/devices/" + deviceId + "/sensors/temperature/latest"
    );
    if (response.status === 204) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Error al obtener datos de sensores de temperatura");
    }

    return await response.json();
}