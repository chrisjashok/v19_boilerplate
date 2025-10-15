import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/home/Home";
import ProjectList from "../screens/projectList";
import LandingPage from "../screens/landingPage/LandingPage";
import ToastMessage from "../hoc/ToastMessage";
import ProjectDetail from "../screens/projectDetails";

function Routers() {
  return (
    <>
      <ToastMessage />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
