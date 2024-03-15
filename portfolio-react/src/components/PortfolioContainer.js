// fix this code
import React, {useState} from "react";
import NavTabs from "./NavTabs";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Blog') {
        return <Services />;
      }
      if (currentPage === 'Contact') {
        return <Contact />
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
}