import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import myPhoto from "./asses/myphoto.png";
import Icons from "./components/Icons";
import "./components/styles/App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="main-page">
        <PortfolioContainer />
      </div>
      <div>
        <img src={myPhoto} />
      </div>
      <div>
        <Icons />
      </div>
    </div>
  );
}
