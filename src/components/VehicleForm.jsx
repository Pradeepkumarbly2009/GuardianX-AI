import { useState } from "react";

function VehicleForm() {

  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    ownerName: "",
    familyContact: "",
    driverName: "",
    vehicleModel: "",
  });


  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };


  const registerVehicle = () => {

    if (
      !vehicle.vehicleNumber ||
      !vehicle.ownerName ||
      !vehicle.familyContact
    ) {
      alert("Please fill required details");
      return;
    }

    alert("🚗 Vehicle Registered Successfully");

    console.log(vehicle);
  };


  return (
    <div
      style={{
        background: "#dbeafe",
        padding: "25px",
        margin: "20px",
        borderRadius: "12px",
      }}
    >

      <h2>
        🚗 GuardianX AI Vehicle Registration
      </h2>


      <input
        name="vehicleNumber"
        placeholder="Vehicle Number"
        value={vehicle.vehicleNumber}
        onChange={handleChange}
        style={{padding:"10px", width:"90%"}}
      />

      <br/><br/>


      <input
        name="ownerName"
        placeholder="Owner Name"
        value={vehicle.ownerName}
        onChange={handleChange}
        style={{padding:"10px", width:"90%"}}
      />

      <br/><br/>


      <input
        name="familyContact"
        placeholder="Family Emergency Contact"
        value={vehicle.familyContact}
        onChange={handleChange}
        style={{padding:"10px", width:"90%"}}
      />

      <br/><br/>


      <input
        name="driverName"
        placeholder="Driver Name"
        value={vehicle.driverName}
        onChange={handleChange}
        style={{padding:"10px", width:"90%"}}
      />

      <br/><br/>


      <input
        name="vehicleModel"
        placeholder="Vehicle Model"
        value={vehicle.vehicleModel}
        onChange={handleChange}
        style={{padding:"10px", width:"90%"}}
      />

      <br/><br/>


      <button
        onClick={registerVehicle}
        style={{
          background:"green",
          color:"white",
          padding:"12px 25px",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer",
        }}
      >
        Register Vehicle
      </button>


    </div>
  );
}

export default VehicleForm;