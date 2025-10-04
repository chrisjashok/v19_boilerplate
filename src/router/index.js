import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../screens/home/Home';
import ProjectDetail from '../screens/projectDetail';
import LandingPage from '../screens/landingPage/LandingPage';
import ToastMessage from '../hoc/ToastMessage';

function Routers() {
    return (
        <>
            <ToastMessage />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/projectdetail' element={<ProjectDetail />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routers
