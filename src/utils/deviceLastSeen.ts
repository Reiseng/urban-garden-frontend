export function formatLastSeen(lastSeenAt?: string | null): string {
  if (!lastSeenAt) {
    return "Nunca";
  }

  return new Date(lastSeenAt).toLocaleString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}