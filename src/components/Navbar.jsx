import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: 15, background: "#2563EB", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h2>Parking Finder</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: 15 }}>Home</Link>
        <Link to="/favorites" style={{ color: "white" }}>Favorites</Link>
      </div>
    </div>
  );
}

export default Navbar;