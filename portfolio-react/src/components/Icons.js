import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../components/styles/Icons.css";

export default function Icons() {


  return (
    <div className="home-sci">
      <a href="https://github.com/BadrAlmadhi">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/badralmadhi/">
        <FaLinkedin />
      </a>
    </div>
  );
}