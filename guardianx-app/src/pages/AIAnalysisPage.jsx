import { useState } from "react";

function AIAnalysisPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [complete, setComplete] = useState(false);

  const startAnalysis = () => {
    setAnalyzing(true);

    setTimeout(() => {
      setAnalyzing(false);
      setComplete(true);
    }, 1500);
  };

  return (
    <main className="flow-page">
      <div className="flow-card">

        {/* PROGRESS */}
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

          <h1>AI Risk Analysis</h1>

          <p>
            GuardianX AI is analyzing the detected
            incident and determining emergency priority.
          </p>

        </div>

        {/* INCIDENT */}
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "#fff0f1",
            border: "1px solid #ffcdd2",
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
                  color: "#c62828",
                  fontSize: "10px",
                  fontWeight: "800",
                }}
              >
                INCIDENT DETECTED
              </span>

              <h3
                style={{
                  marginTop: "6px",
                  color: "#172238",
                }}
              >
                High Impact Event
              </h3>

              <p
                style={{
                  marginTop: "5px",
                  color: "#68778b",
                  fontSize: "11px",
                }}
              >
                Vehicle: UP21 AB 4521
              </p>
            </div>

            <div
              style={{
                fontSize: "34px",
              }}
            >
              🚨
            </div>
          </div>
        </div>

        {/* AI ANALYSIS */}
        <div
          style={{
            padding: "25px",
            borderRadius: "14px",
            background: "#f5f8ff",
            border: "1px solid #d9e5ff",
            textAlign: "center",
          }}
        >

          {!complete ? (
            <>
              <div
                style={{
                  fontSize: "38px",
                  marginBottom: "12px",
                }}
              >
                🤖
              </div>

              <h2
                style={{
                  color: "#1769e0",
                  fontSize: "20px",
                }}
              >
                {analyzing
                  ? "Analyzing Incident..."
                  : "AI Analysis Ready"}
              </h2>

              <p
                style={{
                  marginTop: "8px",
                  color: "#68778b",
                  fontSize: "12px",
                  lineHeight: "1.6",
                }}
              >
                {analyzing
                  ? "GuardianX AI is evaluating impact, vehicle speed, location and emergency priority."
                  : "Start the AI analysis to evaluate the detected incident."}
              </p>

              <button
                onClick={startAnalysis}
                disabled={analyzing}
                className="next-btn"
              >
                {analyzing
                  ? "Analyzing..."
                  : "🤖 Analyze Incident"}
              </button>
            </>
          ) : (
            <>
              <div
                style={{
                  fontSize: "38px",
                  marginBottom: "12px",
                }}
              >
                ⚠️
              </div>

              <h2
                style={{
                  color: "#c62828",
                  fontSize: "20px",
                }}
              >
                CRITICAL RISK
              </h2>

              <p
                style={{
                  marginTop: "8px",
                  color: "#68778b",
                  fontSize: "12px",
                }}
              >
                AI analysis indicates that emergency
                response should be initiated.
              </p>
            </>
          )}

        </div>

        {/* AI METRICS */}
        {complete && (
          <>
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
                  padding: "15px",
                  textAlign: "center",
                  background: "#ffffff",
                  border: "1px solid #e1e7ef",
                  borderRadius: "9px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#7b899b",
                    fontSize: "9px",
                  }}
                >
                  RISK SCORE
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: "5px",
                    color: "#c62828",
                    fontSize: "17px",
                  }}
                >
                  89%
                </strong>
              </div>

              <div
                style={{
                  padding: "15px",
                  textAlign: "center",
                  background: "#ffffff",
                  border: "1px solid #e1e7ef",
                  borderRadius: "9px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#7b899b",
                    fontSize: "9px",
                  }}
                >
                  PRIORITY
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: "5px",
                    color: "#c62828",
                    fontSize: "12px",
                  }}
                >
                  CRITICAL
                </strong>
              </div>

              <div
                style={{
                  padding: "15px",
                  textAlign: "center",
                  background: "#ffffff",
                  border: "1px solid #e1e7ef",
                  borderRadius: "9px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#7b899b",
                    fontSize: "9px",
                  }}
                >
                  CONFIDENCE
                </span>

                <strong
                  style={{
                    display: "block",
                    marginTop: "5px",
                    color: "#1769e0",
                    fontSize: "17px",
                  }}
                >
                  94%
                </strong>
              </div>

            </div>

            <button
              className="next-btn"
              onClick={() =>
                (window.location.href = "/emergency")
              }
            >
              🚨 Initiate Emergency Response →
            </button>
          </>
        )}

      </div>
    </main>
  );
}

export default AIAnalysisPage;