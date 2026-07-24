import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import VehicleForm from "./components/VehicleForm";
import AccidentAlert from "./components/AccidentAlert";
import EmergencyDashboard from "./components/EmergencyDashboard";
import Login from "./components/Login";
import MapView from "./components/MapView";
function App() {
  return (
    <>
      <Navbar title="GuardianX AI" />

      <Hero />

      <Features />

      <VehicleForm />

      <AccidentAlert />

      <EmergencyDashboard />

      <Login />

      <MapView />
    </>
  );
}

export default App;