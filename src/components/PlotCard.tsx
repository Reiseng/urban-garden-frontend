import { ArrowRight, Home, MapPin } from "lucide-react";
import { Link} from "react-router-dom";
import "../styles/PlotInfoCard.css";
import type { PlotInfo } from "../types/plotinfo";
import { getLatestTimestamp, lastUpdate } from "../utils/date";
import { getPlotStatus } from "../utils/plotstatus";

function PlotCard({
    id,
    name,
    size,
    location,
    plantedCrops,
    devices
}: PlotInfo) {
const latestActivity = getLatestTimestamp(devices, device=> device.lastSeenAt);
    const latestDeviceActivity = getLatestTimestamp(
        devices,
        device => device.lastSeenAt
    );

    const plotStatus = getPlotStatus(latestDeviceActivity);
    return (
        <div className="plot-card">

            <div className="plot-top">

                <div className="plot-icon">
                    <Home size={20} />
                </div>

                <div
                    className={`status-dot ${
                        plotStatus === "Operativo"
                            ? "status-connected"
                            : "status-offline"
                    }`}
                >
                    <span className="dot"></span>

                    {plotStatus === "Operativo"
                        ? "Conectado"
                        : "Sin conexión"}
                </div>

            </div>

            <div>
                <div className="plot-name">
                    {name}
                </div>

                <div className="plot-meta">
                    <span>
                        <MapPin size={14} />
                        {location.city}
                    </span>

                    <span>{size} m²</span>
                </div>
            </div>

            <div className="plot-stats">
                <div>
                    <span className="n">
                        {plantedCrops.length}
                    </span>

                    <span className="l">
                        Cultivos activos
                    </span>
                </div>

                <div>
                    <span className="n">
                        {devices.length}
                    </span>

                    <span className="l">
                        Dispositivos
                    </span>
                </div>
            </div>

            <div className="plot-footer">
            <div className="activity">
                Última actividad
                <br />
                <b>
                    {latestActivity
                        ? lastUpdate(latestActivity)
                        : "Sin actividad"}
                </b>
            </div>

                <Link
                    to={`/plot/${id}`}
                    className="open-link"
                >
                    Abrir parcela
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}

export default PlotCard;