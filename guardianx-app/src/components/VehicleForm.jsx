import { useState } from "react";

function VehicleForm({ onVehicleAdded }) {
  const [form, setForm] = useState({
    vehicleNumber: "",
    driverName: "",
    vehicleModel: "",
    emergencyContact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.vehicleNumber ||
      !form.driverName ||
      !form.vehicleModel ||
      !form.emergencyContact
    ) {
      setMessage("Please fill all vehicle details.");
      return;
    }

    const newVehicle = {
      id: Date.now(),
      number: form.vehicleNumber.toUpperCase(),
      driver: form.driverName,
      type: form.vehicleModel,
      emergencyContact: form.emergencyContact,
      speed: 0,
      location: "Not Available",
      status: "ACTIVE",
    };

    onVehicleAdded(newVehicle);

    setForm({
      vehicleNumber: "",
      driverName: "",
      vehicleModel: "",
      emergencyContact: "",
    });

    setMessage("Vehicle registered successfully.");
  };

  return (
    <section className="vehicle-form-section">
      <div className="section-title">
        <div>
          <h2>Register Vehicle</h2>
          <p>Add a vehicle to GuardianX monitoring.</p>
        </div>
      </div>

      <form className="vehicle-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            placeholder="e.g. UP21 AB 4521"
            value={form.vehicleNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Driver Name</label>
          <input
            type="text"
            name="driverName"
            placeholder="Driver name"
            value={form.driverName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Vehicle Model</label>
          <input
            type="text"
            name="vehicleModel"
            placeholder="e.g. Tata Nexon"
            value={form.vehicleModel}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Emergency Contact</label>
          <input
            type="tel"
            name="emergencyContact"
            placeholder="Emergency contact"
            value={form.emergencyContact}
            onChange={handleChange}
          />
        </div>

        <button className="register-btn" type="submit">
          + Register Vehicle
        </button>
      </form>

      {message && (
        <div className="form-message">
          {message}
        </div>
      )}
    </section>
  );
}

export default VehicleForm;