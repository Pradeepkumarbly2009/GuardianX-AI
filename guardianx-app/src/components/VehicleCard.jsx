function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-top">
        <div>
          <span className="vehicle-status">● {vehicle.status}</span>
          <h3>{vehicle.number}</h3>
        </div>

        <span className="vehicle-type">{vehicle.type}</span>
      </div>

      <div className="vehicle-info">
        <div>
          <span>Driver</span>
          <strong>{vehicle.driver}</strong>
        </div>

        <div>
          <span>Speed</span>
          <strong>{vehicle.speed} km/h</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>{vehicle.location}</strong>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;