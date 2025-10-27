import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
