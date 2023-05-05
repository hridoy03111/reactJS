import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// let name = "Hridoy";
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
      document.body.style.backgroundColor = "#23293a";
      showAlert("Dark Mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="titleUtils"
          aboutTest="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
         <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter you text here :"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
