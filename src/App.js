import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import CarouselContainer from "./components/CarouselContainer";
import PageNotFound from "./components/PageNotFound";
import ParticlesBackground from "./components/ParticlesBackground"; // Adjust the import path as needed

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Router>
      <div className="w-screen h-full relative overflow-hidden">
        <ParticlesBackground />
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <CarouselContainer />
                  <CardContainer />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
