import "../styles/PlotInfoCard.css";
import type { Device } from "../types/dashboard";
interface PlotInfoCardProps {
    id: number;
    name: string;
    location: string;
    area: number;
    ActiveCrop?: {
        id: number;
        cropTypeId: number;
        plantedAt: string;
        state: string;
    };
    devices: Device[];
}

function PlotInfoCard({
    id,
    name,
    location,
    area,
    ActiveCrop,
    devices
}: PlotInfoCardProps) {
    return (
        <section className ="Plot-Info">
            <div className ="image-container">
                <img src="/parcela.jpg" alt="img" />
            </div>

            <div className="container-info">
                <h2>{name}</h2>

                <p>Ubicación: {location}</p>
                <p>Área: {area}m²</p>
            </div>
        </section>
    );
}

export default PlotInfoCard;