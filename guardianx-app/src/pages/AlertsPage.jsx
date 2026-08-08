import AlertCard from "../components/AlertCard";

function AlertsPage() {
  const alerts = [
    {
      title: "Potential Accident Detected",
      description:
        "GuardianX AI detected an abnormal vehicle event.",
      location: "Delhi, India",
      time: "2 min ago",
      severity: "High",
    },
    {
      title: "Vehicle Offline",
      description:
        "Vehicle telemetry connection has been interrupted.",
      location: "Moradabad, India",
      time: "18 min ago",
      severity: "Medium",
    },
  ];

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="dashboard-label">
            INCIDENT CENTER
          </span>

          <h1>Alerts</h1>

          <p>
            Monitor incidents and events requiring attention.
          </p>
        </div>

        <div className="page-count alert-count">
          <strong>{alerts.length}</strong>
          <span>Active Alerts</span>
        </div>
      </div>

      <section className="alerts-page-section">
        <div className="alerts-list">
          {alerts.map((alert, index) => (
            <AlertCard
              key={index}
              alert={alert}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default AlertsPage;