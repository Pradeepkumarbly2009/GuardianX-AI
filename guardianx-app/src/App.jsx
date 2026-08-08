import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import VehiclesPage from "./pages/VehiclesPage";
import AlertsPage from "./pages/AlertsPage";
import EmergencyPage from "./pages/EmergencyPage";
import OnboardingPage from "./pages/OnboardingPage";
import AccidentDetectionPage from "./pages/AccidentDetectionPage";
import AIAnalysisPage from "./pages/AIAnalysisPage";
import IncidentSummaryPage from "./pages/IncidentSummaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ONBOARDING */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* VEHICLES */}
        <Route path="/vehicles" element={<VehiclesPage />} />

        {/* ALERTS */}
        <Route path="/alerts" element={<AlertsPage />} />

        {/* EMERGENCY */}
        <Route path="/emergency" element={<EmergencyPage />} />

        {/* ACCIDENT DETECTION */}
        <Route
          path="/accident-detection"
          element={<AccidentDetectionPage />}
        />

        <Route
  path="/ai-analysis"
  element={<AIAnalysisPage />}
/>

<Route
  path="/incident-summary"
  element={<IncidentSummaryPage />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;