function VehicleForm() {
  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2>🚗 Vehicle Registration</h2>

      <input
        type="text"
        placeholder="Owner Name"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Vehicle Number"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Phone Number"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Emergency Contact"
        style={{ width: "300px", padding: "10px", margin: "10px" }}
      />

      <br />

      <button
        style={{
          padding: "12px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        Register Vehicle
      </button>
    </div>
  );
}

export default VehicleForm;