import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import myPhoto from "./asses/myphoto.png";
import Icons from "./components/Icons"
import "./components/styles/App.css";

export default function App() {
  return (
    <div>
      <div>
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
