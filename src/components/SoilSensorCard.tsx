import "../styles/SensorCard.css";

interface SoilSensorCardProps {
    sensorIndex?: number;
    moisture: number;
}

function SoilSensorCard({
    sensorIndex,
    moisture
}: SoilSensorCardProps) {

    const status =
        moisture < 2000
            ? "low"
            : moisture < 3000
                ? "normal"
                : "high";

    const statusLabel = {
        low: "Bajo",
        normal: "Normal",
        high: "Alto"
    };

    const segments = 10;

    const activeSegments = Math.round(
        Math.min(Math.max(moisture, 0), 100) / 4000 * segments
    );

    return (
        <article className="soil-card">

            <div className="soil-top">

            <span className="name">
                Sensor {sensorIndex !== undefined
                    ? sensorIndex + 1
                    : "?"
                }
            </span>

                <span className={`tag tag-${status}`}>
                    {statusLabel[status]}
                </span>

            </div>

            <div className="soil-value">
                {moisture} RAW
            </div>

            <div className={`segments segments-${status}`}>

                {Array.from(
                    { length: segments },
                    (_, index) => (
                        <span
                            key={index}
                            className={
                                index < activeSegments
                                    ? "on"
                                    : ""
                            }
                        />
                    )
                )}

            </div>

            <div className="soil-sub">
                Humedad del suelo
            </div>

        </article>
    );
}

export default SoilSensorCard;