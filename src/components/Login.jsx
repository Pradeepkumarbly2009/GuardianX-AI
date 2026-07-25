import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AdminDashboard from "./AdminDashboard";
import DriverDashboard from "./DriverDashboard";

function Login() {
  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      setError("");
    } catch (err) {
      setError("❌ " + err.message);
    }
  };

  if (loggedIn) {
    return role === "Admin" ? (
      <AdminDashboard />
    ) : (
      <DriverDashboard />
    );
  }

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "40px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h2>🔐 GuardianX Login</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Admin</option>
        <option>Driver</option>
      </select>

      <br />
      <br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>
        Login as {role}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;