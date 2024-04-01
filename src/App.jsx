import React from "react";
import "./App.css";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
