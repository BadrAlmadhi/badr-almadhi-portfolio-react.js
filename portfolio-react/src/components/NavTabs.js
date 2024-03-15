import React from "react";
import "./styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange}) {
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
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#service"
          onClick={() => handlePageChange('Service')}
          className={currentPage === 'Service' ? 'nav-link active' : 'nav-link'}
        >
          Service
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
export default NavTabs;
