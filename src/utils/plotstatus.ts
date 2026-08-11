export function getPlotStatus(
    latestActivity: string | null
): "Operativo" | "Sin conexión" | "Sin dispositivos" {

    if (!latestActivity) {
        return "Sin dispositivos";
    }

    const timestamp = new Date(latestActivity);

    if (isNaN(timestamp.getTime())) {
        return "Sin conexión";
    }

    const diffMinutes =
        (Date.now() - timestamp.getTime()) / 1000 / 60;

    if (diffMinutes <= 5) {
        return "Operativo";
    }

    return "Sin conexión";
}