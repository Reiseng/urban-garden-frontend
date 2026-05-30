import "./styles/Dashboard.css";
import CropCard from "./components/CropCard";
import DeviceCard from "./components/DeviceCard";
import SensorCard from "./components/SensorCard";
import PlotInfoCard from "./components/PlotInfoCard";
import DataState from "./components/DataState";
import { useCrops } from "./hooks/useCrops";
import { useDevices } from "./hooks/useDevices";
import { useEnvironmentSensors } from "./hooks/useEnvironmentSensors";
import { useSoilSensors } from "./hooks/useSoilSensors";
import { usePlots } from "./hooks/usePlots";

function Dashboard() {

    const { plotInfo, loading: loadingPlot, error: errorPlot } = usePlots();

    const { devices, loading: loadingDevices, error: errorDevices } = useDevices();

    const { crops, loading: loadingCrops, error: errorCrops } = useCrops();

    const {
        sensors: environmentSensors,
        loading: loadingEnvironment,
        error: errorEnvironment
    } = useEnvironmentSensors();

    const {
        sensors: soilSensors,
        loading: loadingSoil,
        error: errorSoil
    } = useSoilSensors();

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
                    loading={loadingPlot}
                    error={errorPlot}
                    isEmpty={plotInfo === null}
                    emptyMessage="No hay información de la parcela."
                >
                    {plotInfo && <PlotInfoCard {...plotInfo} />}
                </DataState>


                <section>

                    <h2>Cultivos</h2>

                    <DataState
                        loading={loadingCrops}
                        error={errorCrops}
                        isEmpty={crops.length === 0}
                        emptyMessage="No hay cultivos."
                    >
                        {crops.map(crop => (
                            <CropCard
                                key={crop.name}
                                compact={crops.length >= 4}
                                {...crop}
                            />
                        ))}
                    </DataState>

                </section>

                <section>

                    <h2>Dispositivos</h2>

                    <DataState
                        loading={loadingDevices}
                        error={errorDevices}
                        isEmpty={devices.length === 0}
                        emptyMessage="No hay dispositivos."
                    >
                        {devices.map(device => (
                            <DeviceCard
                                key={device.id}
                                compact={devices.length >= 4}
                                {...device}
                            />
                        ))}
                    </DataState>

                </section>

                <section>

                    <h2>Sensores Ambientales</h2>

                    <DataState
                        loading={loadingEnvironment}
                        error={errorEnvironment}
                        isEmpty={environmentSensors.length === 0}
                        emptyMessage="No hay sensores."
                    >
                        {environmentSensors.map(sensor => (
                            <SensorCard
                                key={`${sensor.deviceID}-${sensor.sensorName}`}
                                compact={environmentSensors.length >= 4}
                                {...sensor}
                            />
                        ))}
                    </DataState>

                </section>

                <section>

                    <h2>Sensores de Suelo</h2>

                    <DataState
                        loading={loadingSoil}
                        error={errorSoil}
                        isEmpty={soilSensors.length === 0}
                        emptyMessage="No hay sensores."
                    >
                        {soilSensors.map(sensor => (
                            <SensorCard
                                key={`${sensor.deviceID}-${sensor.sensorIndex}`}
                                compact={soilSensors.length >= 4}
                                {...sensor}
                            />
                        ))}
                    </DataState>

                </section>

            </main>
        </>
    );
}

export default Dashboard;