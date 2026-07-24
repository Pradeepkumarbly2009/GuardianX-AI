function Navbar({ title }) {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      🛡️ {title}
    </nav>
  );
}

export default Navbar;