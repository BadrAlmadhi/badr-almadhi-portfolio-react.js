import React from "react";
import "../components/styles.css/NavTabs.css"

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <a href="https://github.com/BadrAlmadhi?tab=repositories" className="logo">
        Badr.
      </a>

      <nav className="navbar">
      <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        <a
          href="#service"
          onClick={() => handlePageChange('service')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'service' ? 'nav-link active' : 'nav-link'}
        >
          service
        </a>
      </nav>
    </header>
  );
}
