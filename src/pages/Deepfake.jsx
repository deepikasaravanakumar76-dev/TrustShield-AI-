import { useState } from "react";

function Deepfake() {
  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [explanation, setExplanation] = useState("");

  const analyzeImage = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/deepfake");
      const data = await response.json();

      setResult(data.result);
      setConfidence(data.confidence);
      setExplanation(data.explanation);
    } catch (error) {
      setResult("Server connection failed.");
      setConfidence("");
      setExplanation("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>🖼️ Deepfake Detection</h1>

      <input type="file" />

      <br /><br />

      <button onClick={analyzeImage}>Analyze</button>

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
          <h3>Confidence: {confidence}</h3>

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

export default Deepfake;