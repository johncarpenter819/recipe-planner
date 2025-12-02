import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthForm from "./components/AuthForm";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("/api/test")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data))
  //     .catch(console.error);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
