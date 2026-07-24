import { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import DriverDashboard from "./DriverDashboard";

function Login() {
  const [role, setRole] = useState("Admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      role === "Admin" &&
      username === "admin" &&
      password === "1234"
    ) {
      setLoggedIn(true);
      setError("");
    } else if (
      role === "Driver" &&
      username === "driver" &&
      password === "1234"
    ) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("❌ Wrong Username or Password");
    }
  };

  if (loggedIn) {
    return role === "Admin"
      ? <AdminDashboard />
      : <DriverDashboard />;
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

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>Admin</option>
        <option>Driver</option>
      </select>

      <br /><br />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login as {role}
      </button>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;