import { Sprout, Cpu, Ruler, Activity } from "lucide-react";
import type { PlotInfo } from "../types/plotinfo";

interface PlotSummaryProps {
    plot: PlotInfo;
}

function PlotSummary({ plot }: PlotSummaryProps) {

    return (
        <div className="summary">
            <div className="summary-card sc-1">
                <Ruler size={20} />

                <div>
                    <div className="l">Área</div>
                    <div className="v">{plot.size} m²</div>
                </div>
            </div>

            <div className="summary-card sc-2">
                <Sprout size={20} />

                <div>
                    <div className="l">Cultivos activos</div>
                    <div className="v">{plot.plantedCrops.length}</div>
                </div>
            </div>

            <div className="summary-card sc-3">
                <Cpu size={20} />

                <div>
                    <div className="l">Dispositivos</div>
                    <div className="v">{plot.devices.length}</div>
                </div>
            </div>

            <div className="summary-card sc-4">
                <Activity size={20} />

                <div>
                    <div className="l">Estado</div>
                    <div className="v">Operativo</div>
                </div>
            </div>

        </div>
    );
}

export default PlotSummary;