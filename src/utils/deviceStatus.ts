export function getDeviceStatus(lastSeenAt?: string | null): string {
  if (!lastSeenAt) {
    return "Desconocido";
  }

  const lastSeen = new Date(lastSeenAt);
  const diffMs = Date.now() - lastSeen.getTime();
  const diffMinutes = diffMs / 1000 / 60;

  return diffMinutes <= 5 ? "Conectado" : "Desconectado";
}