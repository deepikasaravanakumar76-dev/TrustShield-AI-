import { useState } from "react";

function Phishing() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");

  const verifyPhishing = async () => {
    if (input.trim() === "") {
      setResult("Please enter a URL or text.");
      setScore("");
      return;
    }

    try {
      const response = await fetch(
        "https://trustshield-backend-k5h5.onrender.com/phishing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: input,
          }),
        }
      );

      const data = await response.json();

      setResult(data.result);
      setScore(data.trust_score);

    } catch (error) {
      setResult("Server connection failed.");
      setScore("");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🔒 Phishing Detection</h1>

      <textarea
        rows="5"
        cols="60"
        placeholder="Paste URL or message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyPhishing}>
        Check
      </button>

      {result && (
        <div>
          <h2>{result}</h2>
          <h3>Trust Score: {score}</h3>
        </div>
      )}
    </div>
  );
}

export default Phishing;