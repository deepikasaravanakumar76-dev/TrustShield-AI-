import { useState } from "react";

function Phishing() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");
  const [explanation, setExplanation] = useState("");

  const checkURL = async () => {
    if (url.trim() === "") {
      alert("Please enter a website URL.");
      return;
    }

    try {
      const response = await fetch("https://trustshield-backend-k5h5.onrender.com/phishing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });
      const data = await response.json();

      setResult(data.result);
      setScore(data.trust_score);
      setExplanation(data.explanation);
    } catch (error) {
      setResult("Server connection failed.");
      setScore("");
      setExplanation("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🔒 Phishing Detection</h1>

      <input
        type="text"
        placeholder="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "350px",
          padding: "10px",
          borderRadius: "8px",
        }}
      />

      <br /><br />

      <button onClick={checkURL}>Check</button>

      {result && (
        <div
          style={{
            background: "white",
            width: "400px",
            margin: "30px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px gray",
          }}
        >
          <h2>{result}</h2>

          <h3>Trust Score: {score}</h3>

          <p>
            <strong>Explanation:</strong>
            <br />
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default Phishing;