import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from "recharts";

interface SensorGaugeProps {
    value: number;
    max: number;
    unit: string;
}

function SensorGauge({ value, max, unit }: SensorGaugeProps) {
    const percentage = (value / max) * 100;

    const data = [
        {
            name: "value",
            value: value,
            fill: "#e0e0e0"
        },
        {
            name: "remaining",
            value: max - value,
            fill: "#e0e0e0"
        }
    ];
    if (unit === "%") {
        data[0].fill = percentage > 50 ? "#0097fc" : percentage > 20 ? "#cc9c00" : "#882d00";
    }
    if (unit === "RAW") {
        data[0].fill = percentage > 50 ? "#46be00" : percentage > 20 ? "#744f00" : "#882d00";
    }
    if (unit === "°C") {
        data[0].fill = percentage > 50 ? "#be5c00" : percentage > 30 ? "#00d440" : "#01e9f1";
    }
    return (
        <div style={{ width: 180, height: 120, position: "relative" }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        startAngle={225}
                        endAngle={-45}
                        innerRadius="70%"
                        outerRadius="100%"
                        dataKey="value"
                    >
                        <Cell />
                        <Cell />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                    textAlign: "center"
                }}
            >
                {value} {unit}
            </div>

        </div>
    );
}

export default SensorGauge;