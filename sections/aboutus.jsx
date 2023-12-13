import React from "react";

import "./aboutus.css"


const AboutUs = () => {

    return( 
    <div className="about-section">
      <div className="left-side">
        <img src="https://cdn.dribbble.com/userupload/11317125/file/original-c632029b31b6c512742cb0231654a55a.png?resize=1200x675" alt="About Us Image" class="about-image" />
        <div className="about-text">ABOUT US</div>
      </div>
  
      <div className="right-side">
        <div className="company-info">
          <h2>Welcome to Our Company</h2>
          <p>You want to eat at your favorite restaurant. Still, you have the usually tedious task ahead of you – from getting ready to arrive at the restaurant through modern-day traffic to waiting for your table. You make the unexpected decision to cancel your dining out plans and instead eat at home.</p>
          <p>Food ordering options are available, but you must still pick them up from the restaurant. As a result, eating at home often appears to be a better option after a long day at work.</p>
          <p>But then there is an app that comes to your rescue every time! The brand wants to ensure that no part of your meal is missing. The brand that comes to your aid whenever hunger tests your patience. The brand wants to ensure you don't miss out on any of your precious moments.</p>
          <p>The brand allows you to keep track of everything with a single tap. The brand not only looks after its customers but also its employees. They understand that there is a lot in a name.</p>
        </div>
     </div>
    </div>);
}


export default AboutUs;