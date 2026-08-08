function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <span className="dashboard-label">
            GUARDIANX AI 2.0
          </span>

          <h1>
            Intelligent Safety
            <span> For Every Journey.</span>
          </h1>

          <p>
            GuardianX AI is an intelligent vehicle safety platform
            designed to detect incidents, monitor vehicles and
            coordinate emergency response from one place.
          </p>

          <div className="home-actions">
            <a href="/dashboard" className="primary-btn">
              Open Dashboard
            </a>

            <a href="/vehicles" className="secondary-btn">
              Manage Vehicles
            </a>
          </div>
        </div>

        <div className="home-status-card">
          <div className="status-header">
            <span>GuardianX Protection</span>
            <span className="online">● ONLINE</span>
          </div>

          <div className="home-shield">🛡️</div>

          <h2>Safety Monitoring Active</h2>

          <p>
            Vehicle monitoring and incident response system
            is ready.
          </p>

          <div className="home-mini-stats">
            <div>
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Detection</span>
            </div>

            <div>
              <strong>GPS</strong>
              <span>Location</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div>
          <span>🚨</span>
          <h3>Incident Detection</h3>
          <p>
            Detect abnormal vehicle events and generate
            incident alerts.
          </p>
        </div>

        <div>
          <span>📍</span>
          <h3>Location Awareness</h3>
          <p>
            Keep incident location information available for
            faster response.
          </p>
        </div>

        <div>
          <span>🆘</span>
          <h3>Emergency Response</h3>
          <p>
            Coordinate the response workflow through one
            centralized dashboard.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;