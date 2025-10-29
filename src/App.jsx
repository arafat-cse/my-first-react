import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"; 

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2 className="logo">Shop Management</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="content">
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
