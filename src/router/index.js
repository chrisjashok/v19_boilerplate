import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../screens/home/Home";
import ProjectList from "../screens/projectList";
import LandingPage from "../screens/landingPage/LandingPage";
import ToastMessage from "../hoc/ToastMessage";
import ProjectDetail from "../screens/projectDetails";
import CoustomBreadcrumb from "../hoc/CoustomBreadcrumb";

function Layout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div>
      {/* Render breadcrumb only on non-landing pages */}
      {!isLanding && <CoustomBreadcrumb />}
      <div>{children}</div>
    </div>
  );
}

function Routers() {
  return (
    <>
      <ToastMessage />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="project_list">
              <Route path="home" element={<Home />} />
              <Route index element={<ProjectList />} />
              <Route path="project_detail" element={<ProjectDetail />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default Routers;
