import "../styles/PlotDetails.css";
import PlotSummary from "../components/PlotSummary";
import CropCard from "../components/CropCard";
import DeviceCard from "../components/DeviceCard";
import SensorCard from "../components/SensorCard";
import HistoryCard from "../components/HistoryCard";
import DataState from "../components/DataState";

import { usePlots } from "../hooks/usePlots";
import { useEnvironmentSensors } from "../hooks/useEnvironmentSensors";
import { useSoilSensors } from "../hooks/useSoilSensors";
import PlotHeader from "../components/PlotHeader";
import SoilSensorCard from "../components/SoilSensorCard";
import { getLatestSensors, getLatestTimestamp, lastUpdate } from "../utils/date";
import { useParams } from "react-router-dom";

function PlotDashboard() {
    const { plotId } = useParams<{ plotId?: string }>();
    const resolvedPlotId = plotId ?? "";
    const {
        plotInfo,
        loading,
        error
    } = usePlots(resolvedPlotId);

    const {
        sensors: environmentSensors,
        loading: loadingEnvironment,
        error: errorEnvironment
    } = useEnvironmentSensors(
        plotInfo?.devices ?? []
    );

    const {
        sensors: soilSensors,
        loading: loadingSoil,
        error: errorSoil
    } = useSoilSensors(
        plotInfo?.devices ?? []
    );


    if (loading) {
        return <p>Cargando parcela...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!plotInfo) {
        return <p>No se encontró la parcela.</p>;
    }
    const visibleDevices = plotInfo.devices.slice(0, 5);
    const visiblecrops = plotInfo.plantedCrops.slice(0, 5);
    const visibleEnvironmentSensors = getLatestSensors(environmentSensors, 5);
    const visibleSoilSensors = getLatestSensors(soilSensors, 5);
    const latestSoilUpdate = getLatestTimestamp(soilSensors);
    const latestEnvironmentUpdate = getLatestTimestamp(
        environmentSensors
    );
    return (
        
        <div className="PlotDashboard">
            <header>
                <div className="brand">
                    <div className="brand-mark">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10h-2a7 7 0 0 1-7 7Z"/><path d="M11 3.05A9.001 9.001 0 0 0 2 12h2a7 7 0 0 1 7-6.95Z"/><path d="M17.5 6.5c-2 0-4 1-5.5 2.5"/></svg>
                    </div>
                    HuertaAPI
                </div>
                <div className="avatar">MC</div>
            </header>
            <main>
                <a className="back-link" href="/dashboard"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>Mis Parcelas</a>

                <PlotHeader plot={plotInfo}/>
                <PlotSummary plot={plotInfo} />


                {/* CULTIVOS */}

                <section className="block">

                    <div className="block-head"><h2>Cultivos</h2>
                    <a className="link" href={`${plotId}/crops`}>Ver todos</a>
                    </div>


                    <DataState
                        loading={false}
                        error={false}
                        isEmpty={
                            plotInfo.plantedCrops.length === 0
                        }
                        emptyMessage="No hay cultivos activos."
                    >

                        <div className={`crop-grid-${plotInfo.plantedCrops.length}`}>

                            {visiblecrops.map(
                                crop => (
                                    <CropCard
                                        key={crop.id}
                                        name={crop.cropType.name}
                                        plantingDate={crop.plantedAt}
                                        status={crop.state as "Planted" | "Growing" | "ReadyForHarvest" | "Harvested"} compact={false}                                    />
                                )
                            )}

                        </div>

                    </DataState>

                </section>


                {/* DISPOSITIVOS */}

                <section className="block">

                    <div className="block-head">
                        <h2>Dispositivos</h2>
                        <a className="link" href={`${plotId}/devices`}>Gestionar</a>
                    </div>


                    <DataState
                        loading={false}
                        error={false}
                        isEmpty={
                            plotInfo.devices.length === 0
                        }
                        emptyMessage="No hay dispositivos asociados."
                    >

                        <div className={`device-grid-${plotInfo.devices.length}`}>

                            {visibleDevices.map(
                                device => (
                                    <DeviceCard
                                        compact={false} key={device.id}
                                        {...device}                                    />
                                )
                            )}

                        </div>

                    </DataState>

                </section>


                {/* SENSORES AMBIENTALES */}

                <section className="block">

                    <div className="block-head">
                        <h2>Sensores ambientales</h2>
                        <span className="sub">
                            {lastUpdate(latestEnvironmentUpdate)}
                        </span>
                    </div>


                    <DataState
                        loading={loadingEnvironment}
                        error={errorEnvironment}
                        isEmpty={
                            environmentSensors.length === 0
                        }
                        emptyMessage="No hay datos ambientales disponibles."
                    >

                        <div className={`sensor-grid-${environmentSensors.length}`}>

                            {visibleEnvironmentSensors.map(
                                sensor => (
                                    <SensorCard
                                        key={`${sensor.deviceID}-${sensor.sensorName}`}
                                        compact={
                                            visibleEnvironmentSensors.length >= 4
                                        }
                                        {...sensor}
                                    />
                                )
                            )}
                        </div>

                    </DataState>

                </section>


                {/* SUELO */}

                <section className="block">

                    <div className="block-head">
                        <h2>Sensores de suelo</h2>
                        <span className="sub">
                            {lastUpdate(latestSoilUpdate)}
                        </span>
                    </div>


                    <DataState
                        loading={loadingSoil}
                        error={errorSoil}
                        isEmpty={
                            soilSensors.length === 0
                        }
                        emptyMessage="No hay datos de suelo disponibles."
                    >

                        <div className={`sensor-grid-${soilSensors.length}`}>

                            {visibleSoilSensors.map(
                                sensor => (
                                    <SoilSensorCard
                                        key={`${sensor.deviceID}-${sensor.sensorIndex}`}
                                        sensorIndex={sensor.sensorIndex}
                                        moisture={sensor.value}
                                    />
                                )
                            )}

                        </div>

                    </DataState>

                </section>


                {/* HISTORIAL */}

                <section className="dashboard-section">

                    <div className="section-header">
                        <div>
                            <h2>Historial</h2>
                        </div>
                    </div>

                    <HistoryCard />

                </section>

            </main>

        </div>
    );
}

export default PlotDashboard;