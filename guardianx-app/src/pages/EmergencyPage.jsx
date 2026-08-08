import { useState } from "react";

function EmergencyPage() {
  const [responseStarted, setResponseStarted] = useState(false);

  return (
    <main className="page-container">
      <div className="page-heading">
        <div>
          <span className="dashboard-label">
            EMERGENCY RESPONSE
          </span>

          <h1>Emergency Center</h1>

          <p>
            Centralized incident response and emergency
            coordination.
          </p>
        </div>

        <div className="system-status">
          <span>●</span> Response System Ready
        </div>
      </div>

      <section className="emergency-card">
        <div className="emergency-icon">
          🚨
        </div>

        <div className="emergency-content">
          <span className="incident-badge">
            DEMO INCIDENT
          </span>

          <h2>Accident Response Center</h2>

          <p>
            When an accident event is detected, GuardianX AI
            can create an incident and initiate the response
            workflow.
          </p>

          <div className="response-grid">
            <div>
              <span>Incident Status</span>
              <strong>
                {responseStarted
                  ? "RESPONSE STARTED"
                  : "WAITING"}
              </strong>
            </div>

            <div>
              <span>Risk Level</span>
              <strong>HIGH</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Delhi, India</strong>
            </div>
          </div>

          <button
            className="emergency-action"
            onClick={() => setResponseStarted(true)}
          >
            {responseStarted
              ? "✓ Response Started"
              : "Start Emergency Response"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default EmergencyPage;