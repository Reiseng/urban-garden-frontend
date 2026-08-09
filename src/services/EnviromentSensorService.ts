const API_URL = import.meta.env.VITE_API_URL;



export async function getEnvironmentSensor(deviceId: string) {

    const response = await fetch(
        `${API_URL}/devices/${deviceId}/sensors/temperature/latest`
    );
    if (response.status === 204) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Error al obtener datos de sensores de temperatura");
    }

    return await response.json();
}
export async function getEnvironmentSensorHistory(
    deviceId: string,
    limit: number = 20
) {
    const response = await fetch(
        `${API_URL}/devices/${deviceId}/sensors/temperature?limit=${limit}`
    );

    if (!response.ok) {
        throw new Error("Error al obtener el historial ambiental");
    }

    return await response.json();
}