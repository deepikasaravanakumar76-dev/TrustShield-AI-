import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        background: "#e3f2fd",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#0d47a1" }}>🛡️ TrustShield AI</h1>
      <div
  style={{
    background: "linear-gradient(90deg,#1565c0,#42a5f5)",
    color: "white",
    padding: "30px",
    borderRadius: "20px",
    marginTop: "20px",
    marginBottom: "30px",
  }}
>
  <h2>Secure Your Digital World with AI</h2>

  <p>
    Detect AI Hallucinations, Deepfakes, and Phishing attacks using one
    intelligent platform.
  </p>

  <button
    style={{
      background: "white",
      color: "#1565c0",
      padding: "12px 25px",
      borderRadius: "10px",
      border: "none",
      fontWeight: "bold",
    }}
  >
    Get Started
  </button>
</div>

      <h2>Unified AI Content Verification Platform</h2>

      <p>
        Verify AI-generated text, images, videos, audio, and websites using one
        trusted platform.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <Link to="/hallucination" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "250px",
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 0 10px gray",
            }}
          >
            <h2>🧠</h2>
            <h3>Hallucination Detection</h3>
            <p>Analyze AI-generated text for false information.</p>
          </div>
        </Link>

        <Link to="/deepfake" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "250px",
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 0 10px gray",
            }}
          >
            <h2>🖼️</h2>
            <h3>Deepfake Detection</h3>
            <p>Upload media to check for possible manipulation.</p>
          </div>
        </Link>

        <Link to="/phishing" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "250px",
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 0 10px gray",
            }}
          >
            <h2>🔒</h2>
            <h3>Phishing Detection</h3>
            <p>Scan websites and links for phishing risks.</p>
          </div>
        </Link>
                  </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            boxShadow: "0 0 10px gray",
          }}
        >
          <h1 style={{ color: "#1565c0" }}>500+</h1>
          <p>Texts Verified</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            boxShadow: "0 0 10px gray",
          }}
        >
          <h1 style={{ color: "#1565c0" }}>300+</h1>
          <p>Images Checked</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            width: "180px",
            boxShadow: "0 0 10px gray",
          }}
        >
          <h1 style={{ color: "#1565c0" }}>100+</h1>
          <p>URLs Scanned</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 0 10px gray",
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>About TrustShield AI</h2>

        <p>
          TrustShield AI is a unified platform that detects AI Hallucinations,
          Deepfakes, and Phishing attacks. It helps users verify AI-generated
          content and provides Explainable AI (XAI) to explain every decision.
        </p>

        <h3>Key Features</h3>

        <ul style={{ textAlign: "left" }}>
          <li>🧠 AI Hallucination Detection</li>
          <li>🖼️ Deepfake Detection</li>
          <li>🔒 Phishing URL Detection</li>
          <li>📊 Trust Score</li>
          <li>🤖 Explainable AI (XAI)</li>
        </ul>
      </div>

      <footer
        style={{
          marginTop: "50px",
          padding: "20px",
          background: "#0d47a1",
          color: "white",
        }}
      >
        © 2026 TrustShield AI | AI-Powered Content Verification Platform
      </footer>

    </div>
  );
}

export default Home;

