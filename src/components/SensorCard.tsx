import "../styles/SensorCard.css";
import SensorGauge from "./SensorGauge";


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
    timestamp,
    sensorIndex
}: SensorCardProps) {
    var max = 0;
    if (unit === "%") {
        max = 100;
    }
    if (unit === "RAW") {
        max = 4096;
    }
    if (unit === "°C") {
        max = 60;
    }
    return (
        <div className={`SensorCard ${compact ? "compact" : ""}`}>
            <div className="main-info">
                <div className="image-container">
                    <SensorGauge
                        value={value}
                        max={max}
                        unit={unit}
                    />
                </div>

                <div className="info-container">
                    <h3>{sensorName}</h3>
                    <p>ID del dispositivo: {deviceID}</p>

                    {sensorIndex !== undefined && (
                        <p>Sensor #{sensorIndex}</p>
                    )}
                </div>
            </div>

            <div className="timestamp-info">
                <p>Última lectura:</p>
                <p>{timestamp}</p>
            </div>
        </div>
    );
}

export default SensorCard;