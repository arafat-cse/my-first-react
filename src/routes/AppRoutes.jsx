import { Routes, Route } from "react-router-dom";
import Home from "../page/Home.jsx";
import About from "../page/About.jsx";
import Contact from "../page/Contact.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
