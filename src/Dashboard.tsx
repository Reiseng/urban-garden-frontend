import "./styles/Dashboard.css";
import CropCard from "./components/CropCard";
import DeviceCard from "./components/DeviceCard";
import SensorCard from "./components/SensorCard";
import PlotInfoCard from "./components/PlotInfoCard";
import DataState from "./components/DataState";
import { useEnvironmentSensors } from "./hooks/useEnvironmentSensors";
import { useSoilSensors } from "./hooks/useSoilSensors";
import { usePlots } from "./hooks/usePlots";

function Dashboard() {

    const { plotInfo, loading: loading, error: error } = usePlots();

    const {
        sensors: environmentSensors,
        loading: loadingEnvironment,
        error: errorEnvironment
    } = useEnvironmentSensors(plotInfo?.devices ?? []);

    const {
        sensors: soilSensors,
        loading: loadingSoil,
        error: errorSoil
    } = useSoilSensors(plotInfo?.devices ?? []);

    return (
        <>
            <header className="Dashboard-header">
            <div className="left">
                <img src="/leaf.png" alt="leaf" />
                <h1>Panel de control</h1>
            </div>

            <div className="right">
                <p>Sistema operativo</p>
            </div>
            </header>

            <main>

                <DataState
                    loading={loading}
                    error={error}
                    isEmpty={plotInfo === null}
                    emptyMessage="No hay información de la parcela."
                >
                    {plotInfo && <PlotInfoCard {...plotInfo} />}
                </DataState>


                <section>

                    <h2>Cultivos</h2>
                    <div className={`crops-container crops-${plotInfo?.activeCrops?.length ?? 0}`}>

                    <DataState
                        loading={loading}
                        error={error}
                        isEmpty={!plotInfo?.activeCrops || plotInfo.activeCrops.length === 0}
                        emptyMessage="No hay cultivos activos."
                    >
                    {plotInfo?.activeCrops?.map(crop => (
                        <CropCard
                            key={crop.id}
                            compact={(plotInfo?.activeCrops?.length ?? 0) >= 4}
                            name={`Cultivo ${crop.cropType?.name}`}
                            plantingDate={crop.plantedAt}
                            status={crop.state}
                        />
                    ))}
                    </DataState>
                    </div>

                </section>
                <section>

                    <h2>Dispositivos</h2>
                    <div className={`devices-container devices-${plotInfo?.devices?.length ?? 0}`}>
                    <DataState
                        loading={loading}
                        error={error}
                        isEmpty={!plotInfo?.devices || plotInfo.devices.length === 0}
                        emptyMessage="No hay dispositivos."
                    >
                        {plotInfo?.devices.map(device => (
                            <DeviceCard
                                key={device.id}
                                compact={(plotInfo?.devices?.length ?? 0) >= 4}
                                {...device}
                            />
                        ))}
                    </DataState>
                    </div>
                </section>

                <section>
                
                    <h2>Sensores Ambientales</h2>
                    <div className={`sensors-container sensors-${environmentSensors.length}`}>
                    <DataState
                        loading={loadingEnvironment}
                        error={errorEnvironment}
                        isEmpty={environmentSensors.length === 0}
                        emptyMessage="No hay datos disponibles."
                    >
                        {environmentSensors.map(sensor => (
                            <SensorCard
                                key={`${sensor.deviceID}-${sensor.sensorName}`}
                                compact={environmentSensors.length >= 4}
                                {...sensor}
                            />
                        ))}
                    </DataState>
                    </div>
                </section>

            <section>

                <h2>Sensores de Suelo</h2>
                <div className={`sensors-container sensors-${soilSensors.length}`}>
                <DataState
                    loading={loadingSoil}
                    error={errorSoil}
                    isEmpty={soilSensors.length === 0}
                    emptyMessage="No hay datos disponibles."
                >
                    {soilSensors.map(sensor => (
                        <SensorCard
                            key={`${sensor.deviceID}-${sensor.sensorIndex}`}
                            compact={soilSensors.length >= 4}
                            {...sensor}
                        />
                    ))}
                </DataState>
                </div>
            </section>

            </main>
        </>
    );
}

export default Dashboard;