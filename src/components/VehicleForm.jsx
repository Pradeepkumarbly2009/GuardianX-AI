import { useState } from "react";

function VehicleForm() {
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    setMessage("✅ Vehicle Registered Successfully!");
  };

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "40px",
        textAlign: "center",
        borderRadius: "10px",
        margin: "20px",
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
        placeholder="Driver Name"
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
        placeholder="Blood Group"
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
        onClick={handleRegister}
        style={{
          padding: "12px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "15px",
          cursor: "pointer",
        }}
      >
        Register Vehicle
      </button>

      {message && (
        <p
          style={{
            color: "#22c55e",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default VehicleForm;