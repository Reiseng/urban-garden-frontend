import "../styles/DeviceCard.css";

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
                <div className="image-container">
                    <img src="/leaf.png" alt="Dispositivo" />
                </div>
                <div className="info-container">
                    <h3>{name}</h3>
                    <p>ID: {id}</p>
                    <p>Estado: {status}</p>
                </div>
            </div>
            <div className="connection-info">
                <p>Última conexión:</p>
                <p>{lastConnection}</p>
            </div>
        </div>
    );
}
export default DeviceCard;