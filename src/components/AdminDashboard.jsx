import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
function AdminDashboard() {
  const [vehicles, setVehicles] = useState([]);

useEffect(() => {
  const unsubscribe = onSnapshot(
    collection(db, "Vehicles"),
    (querySnapshot) => {
      const list = [];

      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setVehicles(list);
    }
  );

  return () => unsubscribe();
}, []);

 const runningVehicles = vehicles.filter(
  (v) => v.Status === "Running"
);

const parkedVehicles = vehicles.filter(
  (v) => v.Status === "Parked"
);

const emergencyVehicles = vehicles.filter(
  (v) => v.Status === "Emergency"
);


  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "25px",
        margin: "20px",
        borderRadius: "12px",
      }}
    >

      <h1 style={{textAlign:"center"}}>
        🛡️ GuardianX AI Admin Dashboard
      </h1>


      <div
        style={{
          display:"flex",
          gap:"15px",
          flexWrap:"wrap",
          marginTop:"25px"
        }}
      >

        <div style={{
          background:"#2563eb",
          padding:"20px",
          borderRadius:"10px",
          flex:1
        }}>
         <h2>🚗 {vehicles.length}</h2>
          <p>Total Vehicles</p>
        </div>


        <div style={{
          background:"#16a34a",
          padding:"20px",
          borderRadius:"10px",
          flex:1
        }}>
          <h2>🟢 {runningVehicles.length}</h2>
          <p>Running</p>
        </div>


        <div style={{
          background:"#eab308",
          padding:"20px",
          borderRadius:"10px",
          flex:1
        }}>
          <h2>🟡 {parkedVehicles.length}</h2>
          <p>Parked</p>
        </div>


        <div style={{
          background:"#dc2626",
          padding:"20px",
          borderRadius:"10",
          flex:1
        }}>
          <h2>🔴 {emergencyVehicles.length}</h2>
          <p>Emergency</p>
        </div>

      </div>
      <h2 style={{ marginTop: "35px" }}>
        🟢 Running Vehicles
      </h2>

{runningVehicles.map((v, index) => (
  <div
    key={index}
    style={{
      background: "#166534",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
    }}
  >
    🚗 Vehicle No: {v.vehicleNumber} <br />
    👤 Driver: {v.DriverName} <br />
    👨 Owner: {v.OwnerName} <br />
    🚙 Model: {v.VehicleModel} <br />
    📱 Emergency Contact: {v.FamilyContact} <br />
    🟢 Status: {v.Status}
  </div>
))}

    {parkedVehicles.map((v, index) => (
  <div
    key={index}
    style={{
      background: "#854d0e",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
    }}
  >
    🚗 Vehicle No: {v.vehicleNumber} <br />
    👤 Driver: {v.DriverName} <br />
    👨 Owner: {v.OwnerName} <br />
    🚙 Model: {v.VehicleModel} <br />
    📱 Emergency Contact: {v.FamilyContact} <br />
    🟡 Status: {v.Status}
  </div>
))}

      {emergencyVehicles.map((v, index) => (
  <div
    key={index}
    style={{
      background: "#991b1b",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
    }}
  >
    🚗 Vehicle No: {v.vehicleNumber} <br />
    👤 Driver: {v.DriverName} <br />
    👨 Owner: {v.OwnerName} <br />
    🚙 Model: {v.VehicleModel} <br />
    📱 Emergency Contact: {v.FamilyContact} <br />
    🔴 Status: {v.Status}
  </div>
))}


      <h2 style={{ marginTop:"35px" }}>
        ⚡ System Status
      </h2>

      <p>🛰 GPS Tracking : Active</p>
      <p>🤖 AI Monitoring : Active</p>
      <p>🚑 Ambulance Network : Connected</p>
      <p>👮 Police Alert System : Online</p>


    </div>
  );
}

export default AdminDashboard;