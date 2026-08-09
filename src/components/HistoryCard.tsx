import { History, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HistoryCard() {

    const navigate = useNavigate();

    return (
        <article className="history-card">

            <div className="history-icon">
                <History size={22} />
            </div>

            <div>
                <h3>Historial de sensores</h3>

                <p>
                    Consultá las mediciones históricas
                    de esta parcela.
                </p>
            </div>

            <button
                className="history-button"
                onClick={() => navigate("history")}
            >
                Ver historial
                <ArrowRight size={17} />
            </button>

        </article>
    );
}

export default HistoryCard;