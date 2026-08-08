import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import VehiclesPage from "./pages/VehiclesPage";
import AlertsPage from "./pages/AlertsPage";
import EmergencyPage from "./pages/EmergencyPage";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/setup" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;