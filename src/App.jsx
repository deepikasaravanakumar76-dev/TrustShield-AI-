import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hallucination from "./pages/Hallucination";
import Deepfake from "./pages/Deepfake";
import Phishing from "./pages/Phishing";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/hallucination" element={<Hallucination />} />
        <Route path="/deepfake" element={<Deepfake />} />
        <Route path="/phishing" element={<Phishing />} />
      </Routes>
    </>
  );
}

export default App;