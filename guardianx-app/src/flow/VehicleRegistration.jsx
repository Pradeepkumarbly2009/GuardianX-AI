import { useState } from "react";

function VehicleRegistration({ onNext }) {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (!vehicleNumber || !vehicleModel) {
      return;
    }

    onNext({
      vehicleNumber: vehicleNumber.toUpperCase(),
      vehicleModel,
    });
  };

  return (
    <main className="flow-page">
      <div className="flow-card">

        <div className="flow-progress">
          <span className="active">1</span>
          <i></i>
          <span>2</span>
          <i></i>
          <span>3</span>
        </div>

        <div className="flow-header">
          <span className="flow-label">
            GUARDIANX AI 2.0
          </span>

          <h1>Register Your Vehicle</h1>

          <p>
            Let's connect your vehicle to the GuardianX
            safety network.
          </p>
        </div>

        <form onSubmit={handleNext}>

          <div className="input-group">
            <label>Vehicle Number</label>

            <input
              type="text"
              placeholder="e.g. UP21 AB 4521"
              value={vehicleNumber}
              onChange={(e) =>
                setVehicleNumber(e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>Vehicle Model</label>

            <input
              type="text"
              placeholder="e.g. Tata Nexon"
              value={vehicleModel}
              onChange={(e) =>
                setVehicleModel(e.target.value)
              }
            />
          </div>

          <button className="next-btn" type="submit">
            Continue →
          </button>

        </form>

      </div>
    </main>
  );
}

export default VehicleRegistration;