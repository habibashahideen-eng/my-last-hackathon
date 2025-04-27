import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />        {/* Default Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;