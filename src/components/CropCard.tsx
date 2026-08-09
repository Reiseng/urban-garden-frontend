import "../styles/CropCard.css";
import { CropStatusLabels } from "../utils/cropStatus";
import { formatDate } from "../utils/date";

interface CropCardProps {
    compact: boolean;
    name: string;
    plantingDate: string;
    status: keyof typeof CropStatusLabels;
}

function CropCard({
    name,
    plantingDate,
    status
}: CropCardProps) {

    return (
        <div className="crop-card">
            <div className="crop-top">
            <div className="crop-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"></circle><path d="M12 6c1-2 3-3 5-3-.5 2-2 4-4 4.5"></path></svg></div>
            <span className={`badge badge-${status}`}>{CropStatusLabels[status]}</span>
            </div>
            <div className="crop-name">{name}</div>
            <div className="crop-info">
            <div><span className="l">Plantado el {" "}</span><span className="v">{formatDate(plantingDate)}</span></div>
            </div>
        </div>
    );
}

export default CropCard;