import React from "react";
import "./styles/NavTabs.css";

function NavTabs() {
  return (
    <header className="header">
      <a
        href="https://github.com/BadrAlmadhi?tab=repositories"
        className="logo"
      >
        Badr.
      </a>

      <nav className="navbar">
        {/* add home index */}
        <a href="add home index here" className="active">
          Home
        </a>
        <a href="about/about.html">About</a>
        <a href="serves/serves.html">Service</a>
        <a href="contact/contact.html">Contact</a>
      </nav>
    </header>
  );
}
export default NavTabs;
