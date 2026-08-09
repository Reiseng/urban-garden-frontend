import "../styles/PlotInfoCard.css";
import type { PlotInfo } from "../types/plotinfo";

function PlotInfoCard({
    name,
    location,
    size
}: PlotInfo) {
    return (
        <section className ="Plot-Info">
            <div className ="image-container">
                <img src="/parcela.jpg" alt="img" />
            </div>

            <div className="container-info">
                <h2>{name}</h2>

                <p>Ubicación: {location.city}</p>
                <p>Área: {size}m²</p>
            </div>
        </section>
    );
}

export default PlotInfoCard;