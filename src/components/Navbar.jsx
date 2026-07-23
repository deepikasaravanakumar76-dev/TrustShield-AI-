import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0b1f3a",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white", margin: 0 }}>🛡️ TrustShield AI</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/hallucination">
          Hallucination
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/deepfake">
          Deepfake
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/phishing">
          Phishing
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;