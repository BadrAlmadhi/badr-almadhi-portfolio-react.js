import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NavTabs from "./components/NavTabs";
import "./components/styles/App.css";

export default function App() {
  return (
    <div>
      <NavTabs />
      <Services />
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Home /> */}
    </div>
  );
}
