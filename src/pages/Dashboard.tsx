import '../styles/Global.css';
import '../styles/Dashboard.css';
import { useNavigate } from "react-router-dom";
import { useUserPlots } from "../hooks/useUserPlots";
// @ts-ignore: ThemeContext is a JS module without type declarations
import { useTheme } from '../hooks/useTheme';
import PlotCard from '../components/PlotCard';
import NewPlotCard from '../components/NewPlotCard';
function Dashboard() {
    const navigate = useNavigate();
    const {
        userplotInfo,
        loading,
        error
    } = useUserPlots();

    const plots = Array.isArray(userplotInfo) ? userplotInfo : [];

    return (
        <div className="dashboard">
        <header>
        <div className="brand">
            <div className="brand-mark">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10 10 10 0 0 0 10-10h-2a7 7 0 0 1-7 7Z"/><path d="M11 3.05A9.001 9.001 0 0 0 2 12h2a7 7 0 0 1 7-6.95Z"/><path d="M17.5 6.5c-2 0-4 1-5.5 2.5"/></svg>
            </div>
            HuertaAPI
        </div>
        <div className="header-right">
            <div className="avatar">MC</div>
        </div>
        </header>

        <main>
        <div className="page-title">Mis Parcelas</div>
        <div className="page-sub">Seleccioná una parcela para administrarla.</div>

        <div className="section-row">
            <h2>Parcelas: <span className="count" style={{ margin: '2px' }}>{plots.length}</span></h2>
            <button className="btn btn-primary" onClick={() => navigate("/plot/new")}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            Nueva parcela
            </button>
        </div>

        <div className="grid">
            {plots.map(plot => (
                <PlotCard
                    key={plot.id}
                    {...plot}
                />
            ))}
            
        <NewPlotCard />

        </div>
        </main>

        </div>
    );
}
export default Dashboard;