import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapView() {
  const position = [28.6139, 77.2090]; // Delhi Demo Location

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        background: "#1e293b",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🗺️ Live Vehicle Location
      </h2>

      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            🚗 GuardianX AI Vehicle
            <br />
            GPS Tracking Active
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;