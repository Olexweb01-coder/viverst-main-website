import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/agro"
          element={
            <ComingSoon
              title="Viverst Agro"
              note="Our agricultural technology and agribusiness brand gets its own home next."
            />
          }
        />
        <Route
          path="/studio"
          element={
            <ComingSoon
              title="Viverst Studio"
              note="Our creative and design brand gets its own home next."
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}