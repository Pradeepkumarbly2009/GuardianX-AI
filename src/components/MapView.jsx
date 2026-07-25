import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const route = [
  [28.3670, 79.4304],
  [28.3678, 79.4318],
  [28.3686, 79.4332],
  [28.3695, 79.4346],
  [28.3703, 79.4360],
  [28.3712, 79.4375],
  [28.3720, 79.4390],
];

function MapView() {
  const [position, setPosition] = useState(route[0]);
  const [speed] = useState(46);
  const [fuel] = useState(74);
  const [battery] = useState(92);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      if (index >= route.length) {
        index = 0;
      }

      setPosition(route[index]);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 2, minWidth: "600px" }}>
        <h2>📍 GuardianX AI Live Tracking</h2>

        <MapContainer
          center={route[0]}
          zoom={14}
          style={{
            height: "500px",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} icon={icon}>
            <Popup>
              🚗 UP25 AB 4589
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "280px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>🚗 Vehicle Details</h2>

        <hr />

        <p><b>Vehicle:</b> UP25 AB 4589</p>

        <p><b>Driver:</b> Pradeep Kumar</p>

        <p><b>Location:</b> Bareilly</p>

        <p><b>Speed:</b> {speed} km/h</p>

        <p><b>Fuel:</b> {fuel}%</p>

        <p><b>Battery:</b> {battery}%</p>

        <p><b>GPS:</b> 🟢 Connected</p>

        <p><b>Status:</b> 🟢 Running</p>

        <p><b>Route:</b> Bareilly → Delhi</p>
      </div>
    </div>
  );
}

export default MapView;