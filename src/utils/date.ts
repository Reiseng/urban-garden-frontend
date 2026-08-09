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

    return sensors.reduce((latest, sensor) => {
        const latestDate = new Date(latest);
        const sensorDate = new Date(sensor.timestamp);

        if (isNaN(sensorDate.getTime())) {
            return latest;
        }

        if (isNaN(latestDate.getTime())) {
            return sensor.timestamp;
        }

        return sensorDate > latestDate
            ? sensor.timestamp
            : latest;
    }, sensors[0].timestamp);
}