import "../styles/SensorCard.css";
import { Droplets, Thermometer } from "lucide-react";
import Sparkline from "./Sparkline";

export interface SensorHistoryPoint {
    value: number;
    timestamp: string;
}

interface SensorCardProps {
    compact: boolean;
    deviceID: string;
    sensorName: string;
    value: number;
    unit: string;
    timestamp: string;
    imagePath?: string;
    sensorIndex?: number;
    history?: SensorHistoryPoint[];
}

function SensorCard({
    compact,
    sensorName,
    value,
    unit,
    history = []
}: SensorCardProps) {

    const isTemperature = unit === "°C";

    return (
        <article
            className={`sensor-card ${compact ? "compact" : ""}`}
        >

            <div className="sensor-top">

                <div className="sensor-label">

                    <span className="ic">
                        {isTemperature ? (
                            <Thermometer size={18} />
                        ) : (
                            <Droplets size={18} />
                        )}
                    </span>

                    {sensorName}

                </div>

            </div>

            <div className="sensor-value-row">

                <div className="sensor-value">
                    {value} {unit}
                </div>

                <Sparkline data={history} />

            </div>

        </article>
    );
}

export default SensorCard;