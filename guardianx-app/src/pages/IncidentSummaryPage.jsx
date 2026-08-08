function IncidentSummaryPage() {
  const incident = {
    vehicle: "UP21 AB 4521",
    driver: "Amit Singh",
    location: "Moradabad, India",
    risk: "CRITICAL",
    riskScore: "89%",
    confidence: "94%",
    impact: "HIGH",
    response: "COMPLETED",
  };

  return (
    <main className="flow-page">

      <div className="flow-card">

        {/* SUCCESS */}
        <div
          style={{
            textAlign: "center",
            padding: "10px 0 25px",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              margin: "0 auto 15px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e7f8ef",
              color: "#148650",
              fontSize: "30px",
            }}
          >
            ✓
          </div>

          <span className="flow-label">
            GUARDIANX AI 2.0
          </span>

          <h1
            style={{
              marginTop: "7px",
            }}
          >
            Incident Response Completed
          </h1>

          <p>
            GuardianX successfully detected, analyzed and
            coordinated the emergency response.
          </p>
        </div>

        {/* INCIDENT STATUS */}
        <div className="summary-success-box">

          <div>
            <span>INCIDENT STATUS</span>
            <strong>RESOLVED</strong>
          </div>

          <div>
            <span>RESPONSE</span>
            <strong>COMPLETED</strong>
          </div>

          <div>
            <span>PRIORITY</span>
            <strong>CRITICAL</strong>
          </div>

        </div>

        {/* INCIDENT DETAILS */}
        <div className="summary-section">

          <span className="card-label">
            INCIDENT DETAILS
          </span>

          <h2>Vehicle & Driver</h2>

          <div className="summary-grid">

            <div>
              <span>Vehicle</span>
              <strong>{incident.vehicle}</strong>
            </div>

            <div>
              <span>Driver</span>
              <strong>{incident.driver}</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>{incident.location}</strong>
            </div>

            <div>
              <span>Impact</span>
              <strong className="critical-text">
                {incident.impact}
              </strong>
            </div>

          </div>

        </div>

        {/* AI ANALYSIS */}
        <div className="summary-section">

          <span className="card-label">
            AI ANALYSIS
          </span>

          <h2>GuardianX Risk Assessment</h2>

          <div className="summary-grid">

            <div>
              <span>Risk Score</span>
              <strong className="critical-text">
                {incident.riskScore}
              </strong>
            </div>

            <div>
              <span>Risk Level</span>
              <strong className="critical-text">
                {incident.risk}
              </strong>
            </div>

            <div>
              <span>AI Confidence</span>
              <strong>
                {incident.confidence}
              </strong>
            </div>

            <div>
              <span>Analysis</span>
              <strong>Completed</strong>
            </div>

          </div>

        </div>

        {/* RESPONSE */}
        <div className="summary-section">

          <span className="card-label">
            EMERGENCY RESPONSE
          </span>

          <h2>Response Network</h2>

          <div className="summary-response-list">

            <div>
              <span>🚑</span>
              <strong>Ambulance</strong>
              <b>✓ DISPATCHED</b>
            </div>

            <div>
              <span>👮</span>
              <strong>Police</strong>
              <b>✓ ALERTED</b>
            </div>

            <div>
              <span>👨‍👩‍👧</span>
              <strong>Emergency Contact</strong>
              <b>✓ NOTIFIED</b>
            </div>

          </div>

        </div>

        {/* DEMO MESSAGE */}
        <div className="summary-demo-message">

          <strong>
            🛡️ GuardianX AI Emergency Workflow
          </strong>

          <p>
            This hackathon MVP demonstrates how a connected
            vehicle safety system can detect an incident,
            assess risk and coordinate emergency response.
          </p>

        </div>

        {/* ACTION */}
        <button
          className="next-btn"
          onClick={() =>
            (window.location.href = "/dashboard")
          }
        >
          ← Return to Safety Dashboard
        </button>

      </div>

    </main>
  );
}

export default IncidentSummaryPage;