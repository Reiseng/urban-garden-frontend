import "../styles/SensorCard.css";

interface SensorCardProps {
    compact: boolean;
    deviceID: string;
    sensorName: string;
    value: number;
    unit: string;
    difference?: number;
    timestamp: string;
    imagePath: string;
    sensorIndex?: number;
}
function SensorCard({
    compact,
    deviceID,
    sensorName,
    value,
    unit,
    difference,
    timestamp,
    imagePath,
    sensorIndex
}: SensorCardProps) {
    return (
        <div className={`SensorCard ${compact ? "compact" : ""}`}>
            <div className="main-info">
                <div className="image-container">
                    <img src={imagePath} alt={sensorName} />
                </div>

                <div className="info-container">
                    <h3>{sensorName}</h3>
                    <p>ID del dispositivo: {deviceID}</p>

                    {sensorIndex !== undefined && (
                        <p>Sensor #{sensorIndex}</p>
                    )}

                    <p>
                        Valor: {value} {unit}
                    </p>
                </div>
            </div>

            <div className="difference-info">
                {difference !== undefined && (
                    <p>
                        {difference.toFixed(1)} {unit} desde la última lectura.
                    </p>
                )}
            </div>

            <div className="timestamp-info">
                <p>Última lectura:</p>
                <p>{timestamp}</p>
            </div>
        </div>
    );
}

export default SensorCard;