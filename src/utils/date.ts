export function formatDate(date: string) {
    const localDate = new Date(date.replace("Z", ""));

    return localDate.toLocaleString("es-AR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
export function lastUpdate(date: string | null): string {
    
    if (!date) {
        return "Sin datos";
    }

    const timestamp = new Date(date);

    if (isNaN(timestamp.getTime())) {
        return "Sin datos";
    }

    const now = new Date();

    const diffSeconds = Math.floor(
        (now.getTime() - timestamp.getTime()) / 1000
    );

    if (diffSeconds < 60) {
        return "Actualizado hace unos segundos";
    }

    const diffMinutes = Math.floor(diffSeconds / 60);

    if (diffMinutes < 60) {
        return `Actualizado hace ${diffMinutes} min`;
    }

    const diffHours = Math.floor(diffMinutes / 60);

    if (diffHours < 24) {
        return `Actualizado hace ${diffHours} h`;
    }

    const diffDays = Math.floor(diffHours / 24);

    return `Actualizado hace ${diffDays} día${diffDays !== 1 ? "s" : ""}`;
}
export function getLatestTimestamp(
    sensors: { timestamp: string }[]
): string | null {

    if (sensors.length === 0) {
        return null;
    }

    const validTimestamps = sensors
        .map(sensor => new Date(sensor.timestamp))
        .filter(date => !isNaN(date.getTime()));

    if (validTimestamps.length === 0) {
        return null;
    }

    const latest = validTimestamps.reduce(
        (latest, current) =>
            current > latest ? current : latest
    );

    return latest.toISOString();
}
export function getLatestSensors<T extends { timestamp: string }>(
    sensors: T[],
    limit: number
): T[] {
    return [...sensors]
        .sort(
            (a, b) =>
                new Date(b.timestamp).getTime() -
                new Date(a.timestamp).getTime()
        )
        .slice(0, limit);
}