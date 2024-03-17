import React from "react";
import "./styles/Home.css";
import Resume from "../asses/resume.png";
import Contact from "./Contact";
import certificate from "../asses/Screenshot.png"

function Home() {
  const resumePhoto = Resume; 
  const contactInfo = <Contact />;
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Badr Almadhi</h1>
        <h3>Coding BootCamp Graduate</h3>
        <p>
        "Hello! I'm Badr Almadhi, a dedicated coding enthusiast currently who have graduated from a <a href={certificate} className="cert"> coding bootcamp</a> in 2023.
        My journey into the world of programming began with a burning curiosity and a desire to bring my
        creative ideas to life through technology. With each line of code I write, I'm building a bridge
        between imagination and reality. I'm passionate about learning and am constantly seeking new
        challenges to expand my skills. Beyond coding, I enjoy problem-solving, collaborating with
        fellow learners, and embracing the ever-evolving tech landscape. I'm excited to see where this
        coding adventure takes me and am committed to growing as a developer with each step of the way."
        </p>
        <div className="btn-box">
          <a href={resumePhoto}>Resume</a>
          <a href={contactInfo}>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
