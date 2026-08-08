function AlertCard({ alert }) {
  return (
    <div className={`alert-card ${alert.severity.toLowerCase()}`}>
      <div className="alert-icon">🚨</div>

      <div className="alert-content">
        <div className="alert-heading">
          <h3>{alert.title}</h3>
          <span>{alert.time}</span>
        </div>

        <p>{alert.description}</p>

        <div className="alert-location">
          📍 {alert.location}
        </div>
      </div>

      <button className="view-alert">View</button>
    </div>
  );
}

export default AlertCard;