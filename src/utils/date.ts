export function formatDate(date: string) {
    const localDate = new Date(date.replace("Z", ""));

    return localDate.toLocaleString("es-AR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}