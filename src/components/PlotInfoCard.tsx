import "../styles/PlotInfoCard.css";
interface PlotInfoCardProps {
    name: string;
    plotName: string;
    location: string;
    area: number;
}

function PlotInfoCard({
    name,
    plotName,
    location,
    area
}: PlotInfoCardProps) {
    return (
        <section className ="Plot-Info">
            <div className ="image-container">
                <img src="/leaf.png" alt="leaf" />
            </div>

            <div className="container-info">
                <h2>{name}</h2>
                <h3>{plotName}</h3>

                <p>Ubicación: {location}</p>
                <p>Área: {area}m²</p>
            </div>
        </section>
    );
}

export default PlotInfoCard;