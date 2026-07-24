import { useState } from "react";

function AccidentAlert() {
  const [alert, setAlert] = useState(false);

  const handleAccident = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 10000);
  };

  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "30px",
        margin: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>🚨 Accident Detection System</h2>

      <p>Click the button to simulate an accident.</p>

      <button
        onClick={handleAccident}
        style={{
          background: "red",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        🚨 Simulate Accident
      </button>

      {alert && (
        <div
          style={{
            marginTop: "20px",
            background: "#dc2626",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>🚨 ACCIDENT DETECTED!</h2>

          <p>📍 GPS Location Sent</p>
          <p>🚑 Ambulance Alert Sent</p>
          <p>👮 Police Alert Sent</p>
          <p>👨‍👩‍👧 Family Alert Sent</p>
          <p>📡 GuardianX AI Monitoring Active</p>
        </div>
      )}
    </div>
  );
}

export default AccidentAlert;