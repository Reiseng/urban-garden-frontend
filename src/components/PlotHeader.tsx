import { Plus} from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { PlotInfo } from "../types/plotinfo";

interface PlotHeaderProps {
    plot: PlotInfo;
}

function PlotHeader({ plot }: PlotHeaderProps) {
    const navigate = useNavigate();
    return(
<div className="plot-header">
            <div className="left">
            <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6"/></svg></div>
            <div>
                <h1>{plot.name}</h1>
                <div className="meta">
                <span><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>{plot.size} m²</span>
                </div>
            </div>
            </div>
            <div className="header-actions">
            <button className="btn" onClick={()=> navigate("edit")}>Editar</button>
            <button className="btn btn-primary" onClick={()=> navigate(`device/new`)}><Plus /> Agregar dispositivo</button>
            </div>
        </div>
        )
    }
export default PlotHeader;