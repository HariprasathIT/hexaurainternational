import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Support from "./pages/support";
import CustomCursor from "./components/CustomCursor";
import "./App.css";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;