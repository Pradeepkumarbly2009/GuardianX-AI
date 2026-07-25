import { useEffect, useState } from "react";
import { collection, getDocs } from "firebae/firestore";
import { db } from "../firebase";

function AdminDashboard() {
  const [vehicles, setVehicles] = useState([]);

useEffect(() => {
  const fetchVehicles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vehicles"));

      const list = [];

      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setVehicles(list);
    } catch (error) {
      console.log(error);
    }
  };

  fetchVehicles();
}, []);

  const runningVehicles = [
    {
      number: "UP25 AB 4589",
      driver: "Pradeep",
      speed: "46 km/h",
      location: "Bareilly",
    },
    {
      number: "UP32 CD 1289",
      driver: "Rahul",
      speed: "52 km/h",
      location: "Delhi Road",
    },
  ];


  const parkedVehicles = [
    {
      number: "UP14 XY 7788",
      driver: "Amit",
      speed: "0 km/h",
      location: "Parking Area",
    },
    {
      number: "UP81 AA 5544",
      driver: "Mohit",
      speed: "0 km/h",
      location: "Depot",
    },
  ];


  const emergencyVehicles = [
    {
      number: "UP78 EF 5542",
      driver: "Aman",
      alert: "Accident Detected",
      location: "Bareilly",
    },
  ];


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
          <h2>🚗 125</h2>
          <p>Total Vehicles</p>
        </div>


        <div style={{
          background:"#16a34a",
          padding:"20px",
          borderRadius:"10px",
          flex:1
        }}>
          <h2>🟢 98</h2>
          <p>Running</p>
        </div>


        <div style={{
          background:"#eab308",
          padding:"20px",
          borderRadius:"10px",
          flex:1
        }}>
          <h2>🟡 22</h2>
          <p>Parked</p>
        </div>


        <div style={{
          background:"#dc2626",
          padding:"20px",
          borderRadius:"10",
          flex:1
        }}>
          <h2>🔴 5</h2>
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
            background:"#166534",
            padding:"15px",
            margin:"10px 0",
            borderRadius:"8px",
          }}
        >
          🚗 {v.number} <br />
          👤 Driver: {v.driver} <br />
          ⚡ Speed: {v.speed} <br />
          📍 Location: {v.location}
        </div>
      ))}


      <h2 style={{ marginTop: "35px" }}>
        🟡 Parked Vehicles
      </h2>

      {parkedVehicles.map((v, index) => (
        <div
          key={index}
          style={{
            background:"#854d0e",
            padding:"15px",
            margin:"10px 0",
            borderRadius:"8px",
          }}
        >
          🚗 {v.number} <br />
          👤 Driver: {v.driver} <br />
          ⚡ Speed: {v.speed} <br />
          📍 Location: {v.location}
        </div>
      ))}


      <h2 style={{ marginTop: "35px" }}>
        🔴 Emergency Vehicles
      </h2>

      {emergencyVehicles.map((v, index) => (
        <div
          key={index}
          style={{
            background:"#991b1b",
            padding:"15px",
            margin:"10px 0",
            borderRadius:"8px",
          }}
        >
          🚨 {v.number} <br />
          👤 Driver: {v.driver} <br />
          ⚠️ Alert: {v.alert} <br />
          📍 Location: {v.location}
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