import { useState } from "react";
import VehicleForm from "../components/VehicleForm";
import VehicleCard from "../components/VehicleCard";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([
    {
      number: "UK06 BA 6061",
      type: "Car",
      driver: "Raj Kumar",
      speed: 54,
      location: "Delhi",
      status: "ACTIVE",
    },
    {
      number: "UP21 AB 4521",
      type: "Truck",
      driver: "Amit Singh",
      speed: 42,
      location: "Moradabad",
      status: "ACTIVE",
    },
  ]);

  const handleVehicleAdded = (vehicle) => {
    setVehicles((current) => [
      ...current,
      vehicle,
    ]);
  };

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="dashboard-label">
            VEHICLE MANAGEMENT
          </span>

          <h1>Vehicles</h1>

          <p>
            Register and monitor vehicles connected to
            GuardianX AI.
          </p>
        </div>

        <div className="page-count">
          <strong>{vehicles.length}</strong>
          <span>Registered Vehicles</span>
        </div>
      </div>

      <VehicleForm
        onVehicleAdded={handleVehicleAdded}
      />

      <section className="dashboard-section">
        <div className="section-title">
          <div>
            <h2>Registered Vehicles</h2>
            <p>
              Vehicles currently available in the monitoring
              system.
            </p>
          </div>
        </div>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id || vehicle.number}
              vehicle={vehicle}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default VehiclesPage;