import { useState } from "react";

function Hallucination() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState("");

  const verifyText = async () => {
    if (text.trim() === "") {
      setResult("Please enter some text.");
      setScore("");
      return;
    }

    try {
      const response = await fetch(
        
"https://trustshield-backend-k5h5.onrender.com/hallucination");
      

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
      <h1>🧠 Hallucination Detection</h1>

      <textarea
        rows="8"
        cols="60"
        placeholder="Paste AI-generated text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyText}>
        Verify
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

export default Hallucination;