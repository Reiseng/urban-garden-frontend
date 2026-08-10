import { useEffect, useState } from "react";
import "../styles/NewPlot.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPlot } from "../services/PlotService";
import { postPlot, updatePlot } from "../services/PlotService";
import { useCreatePlot } from "../hooks/userCreatePlot";

const PLOT_TYPES = [
    {
        id: "invernadero",
        label: "Invernadero",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" />
            </svg>
        ),
    },
    {
        id: "huerta",
        label: "Huerta",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 6 5 10 5 14a7 7 0 0 0 14 0c0-4-3-8-7-12Z" />
            </svg>
        ),
    },
    {
        id: "canteros",
        label: "Canteros",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="10" width="7" height="10" rx="1" />
                <rect x="14" y="6" width="7" height="14" rx="1" />
                <path d="M6.5 10V6.5a2.5 2.5 0 0 1 5 0V10" />
            </svg>
        ),
    },
    {
        id: "semillero",
        label: "Semillero",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12M8 12a4 4 0 1 1 4-4 4 4 0 1 1 4 4Z" />
            </svg>
        ),
    },
];

export default function PlotForm() {
    const { plotId } = useParams();
    const navigate = useNavigate();

    const isEditMode = plotId !== undefined;

    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("invernadero");

    const [location, setLocation] = useState({
        street: "",
        city: "",
        state: "",
        zipCode: ""
    });
    const [plantedCrops, setPlantedCrops] = useState(0);
    const [devices, setDevices] = useState(0);
    const [area, setArea] = useState("");

    const [loadingPlot, setLoadingPlot] = useState(isEditMode);
    const [error, setError] = useState(false);

    const { loading: saving } = useCreatePlot();

    const loading = loadingPlot || saving;

    useEffect(() => {
        const id = plotId;
        if (!id) {
            return;
        }

        async function loadPlot() {
            try {
                setLoadingPlot(true);

                const plot = await getPlot(id!);

                if (!plot) {
                    setError(true);
                    return;
                }

                setNombre(plot.name);
                setTipo(plot.type);
                setArea(String(plot.size));

                setLocation({
                    street: plot.location.street,
                    city: plot.location.city,
                    state: plot.location.state,
                    zipCode: plot.location.zipCode
                });
                setPlantedCrops(plot.plantedCrops.length);
                setDevices(plot.devices.length);
            } catch {
                setError(true);
            } finally {
                setLoadingPlot(false);
            }
        }

        loadPlot();
    }, [plotId]);

    const tipoActivo =
        PLOT_TYPES.find((t) => t.id === tipo) ??
        PLOT_TYPES[0];

    const isValid =
        nombre.trim().length > 0 &&
        area.trim().length > 0 &&
        Number(area) > 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid) {
            return;
        }

        const plot = {
            name: nombre.trim(),
            type: tipo,
            size: Number(area),
            location: {
                street: location.street.trim(),
                city: location.city.trim(),
                state: location.state.trim(),
                zipCode: location.zipCode.trim()
            }
            
        };

        try {
            if (isEditMode) {
                await updatePlot(Number(plotId), plot);
            } else {
                await postPlot(plot);
            }

            navigate("/dashboard");
        } catch {
            setError(true);
        }
    };

    if (loadingPlot) {
        return (
            <div className="plot-form-page">
                <main className="np-main">
                    <p>Cargando parcela...</p>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="plot-form-page">
                <main className="np-main">
                    <p>
                        No se pudo cargar o guardar la parcela.
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/dashboard")}
                    >
                        Volver a Mis Parcelas
                    </button>
                </main>
            </div>
        );
    }

    return (
        <div className="plot-form-page">
            <main className="np-main">

                <Link className="np-back" to="/dashboard">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Mis Parcelas
                </Link>

                <div className="np-title-block">
                    <h1>
                        {isEditMode ? "Editar parcela" : "Nueva parcela"}
                    </h1>

                    <p>
                        {isEditMode
                            ? "Modificá los datos de tu parcela."
                            : "Completá los datos para agregar una parcela a tu cuenta."
                        }
                    </p>
                </div>

                <div className="np-layout">

                    <form
                        className="np-form-card"
                        onSubmit={handleSubmit}
                    >
                        <div className="np-field">
                            <label htmlFor="nombre">
                                Nombre de la parcela
                            </label>

                            <input
                                id="nombre"
                                type="text"
                                placeholder="Ej: Invernadero"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className="np-field">
                            <label>Tipo de parcela</label>

                            <div className="np-type-grid">
                                {PLOT_TYPES.map((t) => (
                                    <button
                                        type="button"
                                        key={t.id}
                                        className={`np-type-option${
                                            tipo === t.id ? " active" : ""
                                        }`}
                                        onClick={() => setTipo(t.id)}
                                    >
                                        <span className="np-type-icon">
                                            {t.icon}
                                        </span>

                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="np-field">
                            <label htmlFor="area">
                                Área
                            </label>

                            <div className="np-input-suffix">
                                <input
                                    id="area"
                                    type="number"
                                    min="0"
                                    placeholder="18"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                />

                                <span>m²</span>
                            </div>
                        </div>

                        <div className="np-field">
                            <label htmlFor="street">
                                Calle
                            </label>

                            <input
                                id="street"
                                type="text"
                                placeholder="Ej: Calle falsa 123"
                                value={location.street}
                                onChange={(e) =>
                                    setLocation({
                                        ...location,
                                        street: e.target.value
                                    })
                                }
                            />
                        </div>

                        <div className="np-field-row">
                            <div className="np-field">
                                <label htmlFor="city">
                                    Ciudad
                                </label>

                                <input
                                    id="city"
                                    type="text"
                                    placeholder="Ej: La Plata"
                                    value={location.city}
                                    onChange={(e) =>
                                        setLocation({
                                            ...location,
                                            city: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className="np-field">
                                <label htmlFor="state">
                                    Provincia
                                </label>

                                <input
                                    id="state"
                                    type="text"
                                    placeholder="Ej: Buenos Aires"
                                    value={location.state}
                                    onChange={(e) =>
                                        setLocation({
                                            ...location,
                                            state: e.target.value
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div className="np-field">
                            <label htmlFor="zipCode">
                                Código postal
                            </label>

                            <input
                                id="zipCode"
                                type="text"
                                placeholder="Ej: 9876"
                                value={location.zipCode}
                                onChange={(e) =>
                                    setLocation({
                                        ...location,
                                        zipCode: e.target.value
                                    })
                                }
                            />
                        </div>

                        <div className="np-actions">
                            <button
                                type="button"
                                className="btn btn-ghost"
                                onClick={() => navigate("/dashboard")}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!isValid || loading}
                            >
                                {saving
                                    ? isEditMode
                                        ? "Guardando..."
                                        : "Creando..."
                                    : isEditMode
                                        ? "Guardar cambios"
                                        : "Crear parcela"
                                }
                            </button>
                        </div>
                    </form>

                    <aside className="np-preview">
                        <div className="np-preview-label">
                            Vista previa
                        </div>

                        <div className="np-plot-card">
                            <div className="np-plot-top">
                                <div className="np-plot-icon">
                                    {tipoActivo.icon}
                                </div>

                                <div className="np-status-dot np-status-off">
                                    <span className="np-dot"></span>
                                    Sin dispositivos
                                </div>
                            </div>

                            <div>
                                <div className="np-plot-name">
                                    {nombre.trim() ||
                                        "Nombre de la parcela"
                                    }
                                </div>

                                <div className="np-plot-meta">
                                    <span>
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle
                                                cx="12"
                                                cy="10"
                                                r="3"
                                            />
                                        </svg>

                                        {location.city.trim() ||
                                            "Ubicación"
                                        }
                                    </span>

                                    <span>
                                        {area.trim()
                                            ? `${area} m²`
                                            : "— m²"
                                        }
                                    </span>
                                </div>
                            </div>
                          <div className="np-plot-stats">
                              <div>
                                  <span className="n">{plantedCrops ?? 0}</span>
                                  <span className="l">
                                      Cultivos activos
                                  </span>
                              </div>

                              <div>
                                  <span className="n">{devices ?? 0}</span>
                                  <span className="l">
                                      Dispositivos
                                  </span>
                              </div>
                          </div>
                            <div className="np-plot-footer">
                                <div className="np-activity">
                                    Última actividad
                                    <br />
                                    <b>
                                        {isEditMode
                                            ? "Sin cambios recientes"
                                            : "Recién creada"
                                        }
                                    </b>
                                </div>

                                <span className="np-open-link np-disabled">
                                    Abrir parcela

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <p className="np-preview-hint">
                            Así se va a ver la tarjeta en{" "}
                            <b>Mis Parcelas</b>.
                        </p>
                    </aside>

                </div>
            </main>
        </div>
    );
}