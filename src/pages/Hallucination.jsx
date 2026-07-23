import { useState } from "react";

function Hallucination() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");
  const [explanation, setExplanation] = useState("");

  const verifyText = async () => {
    if (text.trim() === "") {
      setResult("Please enter some text.");
      setScore("");
      setExplanation("");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/hallucination");
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
  setResult("Analyzing...");

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🧠 Hallucination Detection</h1>

      <textarea
        rows="8"
        cols="60"
        placeholder="Paste AI-generated text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyText}>Verify</button>

      {result && (
        <div
          style={{
            marginTop: "30px",
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
          <div
  style={{
    width: "100%",
    background: "#ddd",
    height: "15px",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "15px",
  }}
>
  <div
    style={{
      width: score,
      background: "#4CAF50",
      height: "100%",
    }}
  ></div>
</div>

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

export default Hallucination;