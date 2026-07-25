import { useState } from "react";

function SOSButton() {
  const [alertSent, setAlertSent] = useState(false);

  const sendSOS = () => {
    setAlertSent(true);
  };

  return (
    <div
      style={{
        background: "#fee2e2",
        border: "2px solid red",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>🚨 Emergency SOS</h2>

      <button
        onClick={sendSOS}
        style={{
          background: "red",
          color: "white",
          padding: "15px 30px",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        SEND SOS
      </button>

      {alertSent && (
        <div style={{ marginTop: "20px" }}>
          <h3>🚨 Emergency Alert Sent!</h3>

          <p>🚓 Police Notified</p>

          <p>🚑 Ambulance Notified</p>

          <p>🏥 Hospital Notified</p>

          <p>👨‍💼 Admin Notified</p>
        </div>
      )}
    </div>
  );
}

export default SOSButton;