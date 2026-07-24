function DriverDashboard() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        margin: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>🚗 Driver Dashboard</h2>

      <p>📍 GPS Status: Active</p>
      <p>🚗 Vehicle: Connected</p>

      <button style={{ margin: "10px", padding: "10px 20px" }}>
        ▶️ Start Trip
      </button>

      <button style={{ margin: "10px", padding: "10px 20px" }}>
        ⏹️ End Trip
      </button>

      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        🚨 SOS Emergency
      </button>
    </div>
  );
}

export default DriverDashboard;