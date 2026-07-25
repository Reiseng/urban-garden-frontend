import "../styles/DeviceCard.css";
import { formatLastSeen } from "../utils/deviceLastSeen.ts";
import { getDeviceStatus } from "../utils/deviceStatus";

interface DeviceCardProps {
    compact: boolean;
    name: string;
    status: string;
    id: string;
    lastConnection: string;
}

function DeviceCard({ compact, name, status, id, lastConnection }: DeviceCardProps) {
    return (
            <div className={`DeviceCard ${compact ? "compact" : ""}`}>
            <div className="main-info">
                <div className="image-device-container">
                    <img src="/procesador.png" alt="Dispositivo" />
                </div>
                <div className="info-container">
                    <h3>{name}</h3>
                    <p>ID: {id}</p>
                    <p>Estado: {getDeviceStatus(lastConnection)}</p>
                </div>
            </div>
            <div className="connection-info">
                <p>Última conexión:</p>
                <p>{formatLastSeen(lastConnection)}</p>
            </div>
        </div>
    );
}
export default DeviceCard;
