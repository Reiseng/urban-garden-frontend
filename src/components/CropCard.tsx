import "../styles/CropCard.css";

interface CropCardProps {
    compact: boolean;
    name: string;
    plantingDate: string;
    status: string;
}

function CropCard({ compact, name, plantingDate, status }: CropCardProps) {
    return (
        <div className={`CropCard ${compact ? "compact" : ""}`}>
            <div className="image-container">
                <img src="/leaf.png" alt="Cultivo" />
            </div>
            <div className="info-container">
                <h3>{name}</h3>
                <p>Fecha de siembra: {plantingDate}</p>
                <p>Estado: {status}</p>
            </div>
        </div>
    );
}
export default CropCard;