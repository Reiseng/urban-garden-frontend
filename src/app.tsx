import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import PlotDashboard from "./pages/PlotDashboard";
import NewPlot from "./pages/NewPlot";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plot/:plotId" element={<PlotDashboard />} />
            <Route path="/plot/new" element={<NewPlot/>}></Route>
            <Route path="/plot/:plotId/edit"></Route>
            <Route path="/plot/:plotId/crops"></Route>
            <Route path="/plot/:plotId/devices"></Route>
            <Route path="/plot/:plotId/devices/new"></Route>
        </Routes>
    );
}

export default App;