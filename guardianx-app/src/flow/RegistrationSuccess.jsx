function RegistrationSuccess({ vehicle, onContinue }) {
  return (
    <main className="flow-page">
      <div className="flow-card success-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="flow-label">
          VEHICLE CONNECTED
        </span>

        <h1>Registration Complete</h1>

        <p>
          Your vehicle is now ready for GuardianX AI
          safety monitoring.
        </p>

        <div className="registered-details">

          <div>
            <span>Vehicle</span>
            <strong>{vehicle.vehicleNumber}</strong>
          </div>

          <div>
            <span>Model</span>
            <strong>{vehicle.vehicleModel}</strong>
          </div>

          <div>
            <span>Driver</span>
            <strong>{vehicle.driverName}</strong>
          </div>

        </div>

        <button
          className="next-btn"
          onClick={onContinue}
        >
          Go to Safety Dashboard →
        </button>

      </div>
    </main>
  );
}

export default RegistrationSuccess;