import "../styles/CropCard.css";
import { CropStatusLabels } from "../utils/cropStatus";
import { formatDate } from "../utils/date";

interface CropCardProps {
    compact: boolean;
    name: string;
    plantingDate: string;
    status: keyof typeof CropStatusLabels;
}

function CropCard({ compact, name, plantingDate, status }: CropCardProps) {
    return (
        <div className={`CropCard ${compact ? "compact" : ""}`}>
            <div className="image-crop-container">
                <img src={`/${name}.png`} alt={name} />
            </div>
            <div className="info-container">
                <h3>{name}</h3>
                <p>Estado: {CropStatusLabels[status] ?? status}</p>
                <p>Fecha de siembra: {formatDate(plantingDate)}</p>
            </div>
        </div>
    );
}
export default CropCard;