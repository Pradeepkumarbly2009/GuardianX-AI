function DriverDashboard() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        margin: "20px",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🚗 GuardianX AI Driver Dashboard
      </h1>

      <hr />

      <h2>📍 Vehicle Status</h2>

      <p>🟢 GPS Status : Active</p>
      <p>🚗 Vehicle : Connected</p>
      <p>🛣️ Trip Status : Ready</p>
      <p>⚡ Speed : 0 km/h</p>

      <hr />

      <button
        style={{
          margin: "10px",
          padding: "12px 25px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ▶️ Start Trip
      </button>

      <button
        style={{
          margin: "10px",
          padding: "12px 25px",
          background: "#f59e0b",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⏹️ End Trip
      </button>

      <button
        style={{
          margin: "10px",
          padding: "12px 25px",
          background: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🚨 SOS Emergency
      </button>

      <hr />

      <h2>📡 Safety Status</h2>

      <p>✅ Seat Belt : Connected</p>
      <p>😴 Driver Alertness : Normal</p>
      <p>🛰️ AI Monitoring : Active</p>
    </div>
  );
}

export default DriverDashboard;