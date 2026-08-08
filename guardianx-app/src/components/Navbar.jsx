import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-icon">🛡️</span>
        <span>GuardianX AI</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/alerts">Alerts</NavLink>
        <NavLink to="/emergency">Emergency</NavLink>
      </div>

      <button className="login-btn">Admin Login</button>
    </nav>
  );
}

export default Navbar;