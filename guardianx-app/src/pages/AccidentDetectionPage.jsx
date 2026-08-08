import { useState } from "react";

function AccidentDetectionPage() {
  const [detected, setDetected] = useState(false);

  const handleDetection = () => {
    setDetected(true);
  };

  return (
    <main className="flow-page">
      <div className="flow-card">

        {/* STEP INDICATOR */}
        <div className="flow-progress">
          <span className="complete">✓</span>
          <i className="active-line"></i>
          <span className="active">2</span>
          <i></i>
          <span>3</span>
        </div>

        {/* HEADER */}
        <div className="flow-header">

          <span className="flow-label">
            GUARDIANX AI 2.0
          </span>

          <h1>
            Accident Detection
          </h1>

          <p>
            GuardianX AI continuously monitors vehicle
            safety signals and identifies potential
            accident events.
          </p>

        </div>

        {/* VEHICLE */}
        <div
          style={{
            padding: "18px",
            border: "1px solid #e1e7ef",
            borderRadius: "12px",
            background: "#f8fafc",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#748196",
                  fontSize: "10px",
                }}
              >
                MONITORED VEHICLE
              </span>

              <h3
                style={{
                  marginTop: "6px",
                  color: "#18263a",
                }}
              >
                UP21 AB 4521
              </h3>

              <p
                style={{
                  marginTop: "4px",
                  color: "#748196",
                  fontSize: "11px",
                }}
              >
                Amit Singh • Truck • Moradabad
              </p>
            </div>

            <span
              style={{
                padding: "6px 10px",
                borderRadius: "20px",
                background: "#e7f8ef",
                color: "#148650",
                fontSize: "10px",
                fontWeight: "700",
              }}
            >
              ● CONNECTED
            </span>
          </div>
        </div>

        {/* DETECTION STATUS */}
        <div
          style={{
            padding: "25px",
            borderRadius: "14px",
            textAlign: "center",
            background: detected ? "#fff0f1" : "#eef5ff",
            border: detected
              ? "1px solid #ffcdd2"
              : "1px solid #d5e5ff",
          }}
        >

          <div
            style={{
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            {detected ? "🚨" : "🛡️"}
          </div>

          <h2
            style={{
              color: detected ? "#c62828" : "#1769e0",
              fontSize: "20px",
            }}
          >
            {detected
              ? "ACCIDENT DETECTED"
              : "Vehicle Monitoring Active"}
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#68778b",
              fontSize: "12px",
              lineHeight: "1.6",
            }}
          >
            {detected
              ? "A high-impact event has been detected. GuardianX AI is ready to analyze the incident."
              : "No accident detected. Vehicle safety monitoring is currently active."}
          </p>

        </div>

        {/* SENSOR DATA */}
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >

          <div
            style={{
              padding: "14px",
              border: "1px solid #e1e7ef",
              borderRadius: "9px",
              background: "#ffffff",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                color: "#7b899b",
                fontSize: "9px",
              }}
            >
              IMPACT
            </span>

            <strong
              style={{
                display: "block",
                marginTop: "5px",
                color: detected ? "#c62828" : "#148650",
                fontSize: "12px",
              }}
            >
              {detected ? "HIGH" : "NORMAL"}
            </strong>
          </div>

          <div
            style={{
              padding: "14px",
              border: "1px solid #e1e7ef",
              borderRadius: "9px",
              background: "#ffffff",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                color: "#7b899b",
                fontSize: "9px",
              }}
            >
              SPEED
            </span>

            <strong
              style={{
                display: "block",
                marginTop: "5px",
                color: "#28374b",
                fontSize: "12px",
              }}
            >
              {detected ? "68 km/h" : "42 km/h"}
            </strong>
          </div>

          <div
            style={{
              padding: "14px",
              border: "1px solid #e1e7ef",
              borderRadius: "9px",
              background: "#ffffff",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                color: "#7b899b",
                fontSize: "9px",
              }}
            >
              GPS
            </span>

            <strong
              style={{
                display: "block",
                marginTop: "5px",
                color: "#28374b",
                fontSize: "12px",
              }}
            >
              {detected ? "DETECTED" : "ACTIVE"}
            </strong>
          </div>

        </div>

        {/* ACTION */}
        {!detected ? (
          <button
            onClick={handleDetection}
            className="next-btn"
            style={{
              background: "#e53935",
            }}
          >
            🚨 SIMULATE ACCIDENT
          </button>
        ) : (
          <button
            className="next-btn"
            onClick={() =>
              (window.location.href = "/ai-analysis")
            }
          >
            Analyze Incident →
          </button>
        )}

      </div>
    </main>
  );
}

export default AccidentDetectionPage;