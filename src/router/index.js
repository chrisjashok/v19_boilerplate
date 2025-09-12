import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Screen1 from '../screens/screen1/screen1';  
import Screen2 from '../screens/screen2/screen2';

function Routers() {
    return (
       <Router>
        <Routes>
            <Route path="/" element={<Screen1 />} />
            <Route path="/screen2" element={<Screen2 />} />
        </Routes>
       </Router>
    )
}

export default Routers
