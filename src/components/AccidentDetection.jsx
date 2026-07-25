import { useState } from "react";

function AccidentDetection() {
  const [accident, setAccident] = useState(false);

  const detectAccident = () => {
    setAccident(true);
  };

  const resetAlert = () => {
    setAccident(false);
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        background: "#fff3cd",
        border: "2px solid orange",
        borderRadius: "10px",
      }}
    >
      <h2>🤖 AI Accident Detection</h2>

      {!accident ? (
        <>
          <p>Vehicle Status: 🟢 Safe</p>

          <button
            onClick={detectAccident}
            style={{
              background: "red",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Simulate Accident
          </button>
        </>
      ) : (
        <>
          <h2 style={{ color: "red" }}>
            🚨 ACCIDENT DETECTED
          </h2>

          <p>📍 Location: Bareilly, Uttar Pradesh</p>
          <p>🚓 Police Alert Sent</p>
          <p>🚑 Ambulance Alert Sent</p>
          <p>🏥 Hospital Alert Sent</p>
          <p>👨‍💼 Admin Alert Sent</p>

          <button
            onClick={resetAlert}
            style={{
              background: "green",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default AccidentDetection;