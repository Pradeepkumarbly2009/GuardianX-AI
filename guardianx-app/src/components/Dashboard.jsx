function Dashboard() {
  const vehicles = [
    {
      number: "UK06 BA 6061",
      type: "Car",
      driver: "Raj Kumar",
      speed: 54,
      location: "Delhi",
      status: "ACTIVE",
    },
    {
      number: "UP21 AB 4521",
      type: "Truck",
      driver: "Amit Singh",
      speed: 42,
      location: "Moradabad",
      status: "ACTIVE",
    },
    {
      number: "DL04 XY 8821",
      type: "Van",
      driver: "Vikas Sharma",
      speed: 0,
      location: "Ghaziabad",
      status: "IDLE",
    },
  ];

  return (
    <main className="dashboard dashboard-modern">

      {/* HEADER */}
      <div className="dashboard-heading">
        <div>
          <span className="dashboard-label">
            GUARDIANX AI 2.0
          </span>

          <h1>Safety Operations Center</h1>

          <p>
            Real-time overview of vehicle safety,
            incidents and emergency readiness.
          </p>
        </div>

        <div className="system-status">
          <span>●</span>
          System Operational
        </div>
      </div>

      {/* KPI CARDS */}
      <section className="stats-grid">

        <div className="stat-card stat-blue">
          <div className="stat-icon">🚙</div>
          <div>
            <strong>24</strong>
            <p>Total Vehicles</p>
          </div>
        </div>

        <div className="stat-card stat-green">
          <div className="stat-icon">✓</div>
          <div>
            <strong>21</strong>
            <p>Active Vehicles</p>
          </div>
        </div>

        <div className="stat-card stat-red">
          <div className="stat-icon">🚨</div>
          <div>
            <strong>02</strong>
            <p>Active Incidents</p>
          </div>
        </div>

        <div className="stat-card stat-orange">
          <div className="stat-icon">⚡</div>
          <div>
            <strong>98%</strong>
            <p>System Readiness</p>
          </div>
        </div>

      </section>

      {/* OVERVIEW */}
      <section className="dashboard-overview">

        <div className="overview-card">
          <div className="overview-header">
            <div>
              <span className="card-label">SAFETY STATUS</span>
              <h2>GuardianX Network</h2>
            </div>

            <span className="live-badge">
              ● LIVE
            </span>
          </div>

          <div className="network-status">
            <div className="network-circle">
              98%
            </div>

            <div>
              <h3>Excellent</h3>
              <p>
                Vehicle monitoring network is operating
                normally.
              </p>
            </div>
          </div>
        </div>

        <div className="overview-card">
          <div className="overview-header">
            <div>
              <span className="card-label">
                INCIDENT MONITOR
              </span>

              <h2>Current Risk</h2>
            </div>
          </div>

          <div className="risk-box">
            <span className="risk-dot"></span>

            <div>
              <strong>LOW</strong>
              <p>
                No critical emergency response currently
                pending.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* LIVE VEHICLES */}
      <section className="dashboard-section">

        <div className="section-title">
          <div>
            <span className="card-label">
              VEHICLE NETWORK
            </span>

            <h2>Live Vehicles</h2>

            <p>
              Current vehicles being monitored by GuardianX.
            </p>
          </div>

          <a
            href="/vehicles"
            className="outline-btn dashboard-link"
          >
            Manage Vehicles →
          </a>
        </div>

        <div className="vehicle-grid">

          {vehicles.map((vehicle) => (
            <div
              className="vehicle-card dashboard-vehicle-card"
              key={vehicle.number}
            >

              <div className="vehicle-top">

                <div>
                  <span className="vehicle-status">
                    ● {vehicle.status}
                  </span>

                  <h3>{vehicle.number}</h3>
                </div>

                <span className="vehicle-type">
                  {vehicle.type}
                </span>

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
          ))}

        </div>

      </section>

      {/* QUICK ACTIONS */}
      <section className="quick-actions">

        <div>
          <span>🚗</span>

          <div>
            <h3>Vehicle Management</h3>
            <p>
              Register and monitor GuardianX vehicles.
            </p>
          </div>

          <a href="/vehicles">Open →</a>
        </div>

        <div>
          <span>🚨</span>

          <div>
            <h3>Incident Center</h3>
            <p>
              Review active safety alerts.
            </p>
          </div>

          <a href="/alerts">Open →</a>
        </div>

        <div>
          <span>🆘</span>

          <div>
            <h3>Emergency Response</h3>
            <p>
              Manage emergency response workflow.
            </p>
          </div>

          <a href="/emergency">Open →</a>
        </div>

      </section>

    </main>
  );
}

export default Dashboard;