function AdminDashboard() {
  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "40px",
        margin: "20px",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🛡️ GuardianX AI Admin Dashboard
      </h1>

      <hr />

      <h2>📊 System Status</h2>

      <p>🟢 Accident Monitoring : Active</p>
      <p>🟢 Ambulance Network : Connected</p>
      <p>🟢 Police Alert System : Online</p>
      <p>🟢 GPS Tracking : Active</p>

      <hr />

      <h2>📈 Live Statistics</h2>

      <p>🚗 Total Vehicles : 125</p>
      <p>👨 Drivers Online : 48</p>
      <p>🚨 Today's Accidents : 2</p>
      <p>📋 Total Accident Reports : 24</p>

      <hr />

      <h2>⚡ Emergency Status</h2>

      <p>🚑 Ambulances Available : 18</p>
      <p>👮 Police Units Available : 12</p>
      <p>🏥 Nearby Hospitals : 9</p>
    </div>
  );
}

export default AdminDashboard;