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
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        📍 GuardianX AI - Live Vehicle Tracking
      </h2>

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
            🚗 Vehicle No: UP25 AB 4589
            <br />
            👤 Driver: Pradeep Kumar
            <br />
            ⚡ Speed: 46 km/h
            <br />
            🟢 Status: Running
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;