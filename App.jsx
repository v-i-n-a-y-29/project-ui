import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage"; 
import DashBoard from "./Pages/Dashboard";
import CreateTest from "./Pages/CreateTest";
export default function App() {
  const [userType] = useState("faculty"); // keep faculty for now

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard userType={userType} />} />
        <Route path="/create-test" element={<CreateTest />} />
      </Routes>
    </Router>
  );
}
