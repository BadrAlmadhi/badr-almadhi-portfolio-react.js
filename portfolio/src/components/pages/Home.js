import React from "react";
import NavTabs from "../NavTabs";

export default function Home () {
    return (
        <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Badr Almadhi</h1>
          <h3>Coding BootCamp Student</h3>
          <p>"Hello! I'm Badr Almadhi, a dedicated coding enthusiast currently who have graduated from a <a href="images/certificate.png"> coding bootcamp</a> in 2023.
            My journey into the world of programming began with a burning curiosity and a desire to bring my
            creative ideas to life through technology. With each line of code I write, I'm building a bridge
            between imagination and reality. I'm passionate about learning and am constantly seeking new
            challenges to expand my skills. Beyond coding, I enjoy problem-solving, collaborating with
            fellow learners, and embracing the ever-evolving tech landscape. I'm excited to see where this
            coding adventure takes me and am committed to growing as a developer with each step of the way."</p>
            <div class="btn-box">
              <a href="images/resumePhoto.png">Hire Me</a>
              <a href="contact/contact.html">Let's Talk</a>
            </div>
            {/* <img class='imeg' src="images/myphoto.png"> */}
        </div>
    
        <div className="home-sci">
          <a href="https://github.com/BadrAlmadhi"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i class='bx bxl-linkedin'></i></a>
          
        </div>
    
       
      </section>
    
    );
}