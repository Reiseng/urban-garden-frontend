import { Sprout, Cpu, Ruler, Activity } from "lucide-react";
import type { PlotInfo } from "../types/plotinfo";
import { getLatestTimestamp } from "../utils/date";

interface PlotSummaryProps {
    plot: PlotInfo;
}
export function getPlotStatus(
    latestActivity: string | null
): "Operativo" | "Sin conexión" | "Sin dispositivos" {

    if (!latestActivity) {
        return "Sin dispositivos";
    }

    const timestamp = new Date(latestActivity);

    if (isNaN(timestamp.getTime())) {
        return "Sin conexión";
    }

    const diffMinutes =
        (Date.now() - timestamp.getTime()) / 1000 / 60;

    if (diffMinutes <= 5) {
        return "Operativo";
    }

    return "Sin conexión";
}
function PlotSummary({ plot }: PlotSummaryProps) {
const latestDeviceActivity = getLatestTimestamp(
    plot.devices,
    device => device.lastSeenAt
);
const plotStatus = getPlotStatus(latestDeviceActivity);
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
                    <div className="v">{plotStatus}</div>
                </div>
            </div>

        </div>
    );
}

export default PlotSummary;