import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/profile" element={<Profile />} />
        <Route path="/career" element={<Career />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
