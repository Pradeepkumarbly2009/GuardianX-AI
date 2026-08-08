import { useState } from "react";

function DriverDetails({ vehicle, onNext }) {
  const [driverName, setDriverName] = useState("");
  const [contact, setContact] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (!driverName || !contact) {
      return;
    }

    onNext({
      ...vehicle,
      driverName,
      emergencyContact: contact,
    });
  };

  return (
    <main className="flow-page">
      <div className="flow-card">

        <div className="flow-progress">
          <span className="complete">✓</span>
          <i className="active-line"></i>
          <span className="active">2</span>
          <i></i>
          <span>3</span>
        </div>

        <div className="flow-header">
          <span className="flow-label">
            STEP 2 OF 3
          </span>

          <h1>Driver & Emergency Details</h1>

          <p>
            These details help GuardianX coordinate a
            response during an incident.
          </p>
        </div>

        <div className="vehicle-summary">
          <strong>{vehicle.vehicleNumber}</strong>
          <span>{vehicle.vehicleModel}</span>
        </div>

        <form onSubmit={handleNext}>

          <div className="input-group">
            <label>Driver Name</label>

            <input
              type="text"
              placeholder="Enter driver name"
              value={driverName}
              onChange={(e) =>
                setDriverName(e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>Emergency Contact</label>

            <input
              type="tel"
              placeholder="Enter emergency contact"
              value={contact}
              onChange={(e) =>
                setContact(e.target.value)
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

export default DriverDetails;