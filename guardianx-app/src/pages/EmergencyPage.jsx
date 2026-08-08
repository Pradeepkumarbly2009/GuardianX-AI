import { useState } from "react";

function EmergencyPage() {
  const [responseStarted, setResponseStarted] = useState(false);

  const services = [
    {
      icon: "🚑",
      title: "Ambulance",
      description: "Medical emergency response",
      status: responseStarted ? "DISPATCHED" : "READY",
    },
    {
      icon: "👮",
      title: "Police",
      description: "Local emergency authority",
      status: responseStarted ? "ALERTED" : "READY",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Emergency Contact",
      description: "Registered family contact",
      status: responseStarted ? "NOTIFIED" : "READY",
    },
  ];

  return (
    <main className="flow-page">

      <div className="flow-card emergency-flow-card">

        {/* HEADER */}
        <div className="flow-header">

          <span className="flow-label">
            GUARDIANX AI 2.0
          </span>

          <h1>Emergency Response Center</h1>

          <p>
            GuardianX AI coordinates emergency response
            after a critical vehicle incident is detected.
          </p>

        </div>

        {/* INCIDENT STATUS */}
        <div
          style={{
            padding: "20px",
            borderRadius: "14px",
            background: responseStarted
              ? "#eefaf4"
              : "#fff5f5",
            border: responseStarted
              ? "1px solid #c9ead8"
              : "1px solid #ffd4d4",
            marginBottom: "22px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
            }}
          >

            <div>

              <span
                style={{
                  color: responseStarted
                    ? "#148650"
                    : "#c62828",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                {responseStarted
                  ? "● RESPONSE ACTIVE"
                  : "● CRITICAL INCIDENT"}
              </span>

              <h2
                style={{
                  marginTop: "7px",
                  color: "#18263a",
                  fontSize: "20px",
                }}
              >
                Accident Response
              </h2>

              <p
                style={{
                  marginTop: "6px",
                  color: "#68778b",
                  fontSize: "11px",
                  lineHeight: "1.6",
                }}
              >
                High-risk accident detected for vehicle
                UP21 AB 4521.
              </p>

            </div>

            <div
              style={{
                fontSize: "40px",
              }}
            >
              {responseStarted ? "🚑" : "🚨"}
            </div>

          </div>

        </div>

        {/* INCIDENT INFORMATION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginBottom: "22px",
          }}
        >

          <div className="response-info-card">
            <span>VEHICLE</span>
            <strong>UP21 AB 4521</strong>
          </div>

          <div className="response-info-card">
            <span>RISK LEVEL</span>
            <strong className="critical-text">
              CRITICAL
            </strong>
          </div>

          <div className="response-info-card">
            <span>LOCATION</span>
            <strong>Moradabad</strong>
          </div>

        </div>

        {/* RESPONSE SERVICES */}
        <div>

          <span className="card-label">
            EMERGENCY NETWORK
          </span>

          <h2
            style={{
              marginTop: "5px",
              marginBottom: "15px",
              color: "#18263a",
              fontSize: "18px",
            }}
          >
            Response Coordination
          </h2>

          <div className="response-services">

            {services.map((service) => (

              <div
                className="response-service"
                key={service.title}
              >

                <div className="response-service-icon">
                  {service.icon}
                </div>

                <div className="response-service-info">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </div>

                <span
                  className={
                    responseStarted
                      ? "service-status dispatched"
                      : "service-status"
                  }
                >
                  {responseStarted
                    ? `✓ ${service.status}`
                    : `● ${service.status}`}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* ACTION */}
        {!responseStarted ? (

          <button
            className="emergency-action"
            onClick={() => setResponseStarted(true)}
          >
            🚨 Start Emergency Response
          </button>

        ) : (

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              borderRadius: "12px",
              background: "#eefaf4",
              border: "1px solid #c9ead8",
            }}
          >

            <strong
              style={{
                color: "#148650",
              }}
            >
              ✓ Emergency Response Initiated
            </strong>

            <p
              style={{
                marginTop: "6px",
                color: "#68778b",
                fontSize: "11px",
              }}
            >
              Ambulance dispatched, police alerted and
              emergency contact notified.
            </p>

            <button
              className="next-btn"
              onClick={() =>
                (window.location.href =
                  "/incident-summary")
              }
            >
              View Incident Summary →
            </button>

          </div>

        )}

      </div>

    </main>
  );
}

export default EmergencyPage;