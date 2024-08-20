import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
