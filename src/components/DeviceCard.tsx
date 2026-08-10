import "../styles/DeviceCard.css";
import { formatLastSeen } from "../utils/deviceLastSeen.ts";
import { getDeviceStatus } from "../utils/deviceStatus";

interface DeviceCardProps {
    compact: boolean;
    name: string;
    id: string;
    lastSeenAt: string;
}

function DeviceCard({
    name,
    lastSeenAt
}: DeviceCardProps) {

    const online = lastSeenAt
        ? Date.now() - new Date(lastSeenAt).getTime() < 3 * 60 * 1000
        : false;

    return (
    <div className="device-card">
        <div className="device-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"></rect><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"></path></svg></div>
        <div>
          <div className="device-name">{name}</div>
          <div className={`device-status ${
                        online ? "on" : "offline"
                    }`}><span className="dot"/>{getDeviceStatus(lastSeenAt)}</div>
          <div className="device-last">Última conexión: {formatLastSeen(lastSeenAt)}</div>
        </div>
      </div>
    );
}

export default DeviceCard;