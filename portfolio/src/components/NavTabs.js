import React from "react";

export default function NavTabs({ currentPage, handlePageChange }) {
    return(
        <header className="header">
        <a href="https://github.com/BadrAlmadhi?tab=repositories" class="logo">Badr.</a>
    
        <nav class="navbar">
          <a href="" class="active">Home</a>
          {/* <a href="about.html">About</a>
          <a href="../serves/serves.html">Service</a>
          <a href="../contact/contact.html">Contact</a> */}
        </nav>
      </header>
    );
}