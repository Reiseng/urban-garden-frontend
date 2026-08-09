interface SparklinePoint {
    value: number;
    timestamp?: string;
}

interface SparklineProps {
    data: SparklinePoint[];
}

function Sparkline({ data }: SparklineProps) {

    if (data.length < 2) {
        return (
            <div className="sparkline-empty">
                Sin historial
            </div>
        );
    }

    const width = 120;
    const height = 36;
    const padding = 4;

    const values = data.map(point => point.value);

    const min = Math.min(...values);
    const max = Math.max(...values);

    const range = max - min || 1;

    const points = data
        .map((point, index) => {

            const x =
                padding +
                (index / (data.length - 1)) *
                (width - padding * 2);

            const y =
                height -
                padding -
                ((point.value - min) / range) *
                (height - padding * 2);

            return `${x},${y}`;
        })
        .join(" ");

    return (
        <svg
            className="sparkline"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
        >
            <polyline
                points={points}
                fill="none"
                stroke="var(--blue)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Sparkline;