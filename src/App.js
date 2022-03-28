// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Calculator from "./components/Calculator";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "grey";
      document.title = "Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "warning");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Data" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert}></Alert>
          <Routes>
            <Route path="/about" element={<About></About>} />
            <Route
              exact path="/"
              element={<TextForm heading="Enter details" mode={mode} />}
            />
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
