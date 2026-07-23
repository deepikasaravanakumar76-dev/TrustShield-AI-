import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username.trim() === "") {
      alert("Please enter your username");
      return;
    }

    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e3f2fd",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1>🛡️ TrustShield AI</h1>
        <h3>Login</h3>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid gray",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
            background: "#1565c0",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;