import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NewPlotCard() {
    const navigate = useNavigate();

    return (
        <button
            className="new-card"
            onClick={() => navigate("/plot/new")}
        >
            <div className="plus">
                <Plus size={20} />
            </div>

            <span>Agregar nueva parcela</span>
            <small>
                Registrá una parcela y sus dispositivos
            </small>
        </button>
    );
}

export default NewPlotCard;