export async function getSoilSensor(deviceId: string) {

    const response = await fetch(
        "http://localhost:5000/api/v1/devices/" + deviceId + "/sensors/soil/latest"
    );
    if (response.status === 204) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Error al obtener datos de sensores de humedad del suelo");
    }

    return await response.json();
}