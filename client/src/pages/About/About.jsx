import React from "react";
import FFJ from "./../../img/FFJ.png";
import Ralph from "./../../img/Ralph.png";
import HM from "./../../img/HM.png";
import Polar from "./../../img/polar-fix.png";
import "./About.scss";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h2>Who We Are</h2>
        <p>Based in Florida with clients & team members all over the globe.</p>
      </div>
      <div className="about-content">
        <div className="facts-container">
          <ul className="facts-list">
            <h3>Breeze Boss Facts</h3>
            <li className="fact-item fact-1">Based in Florida</li>
            <li className="fact-item fact-2">Travel Anywhere</li>
            <li className="fact-item fact-3">Love Our Clients</li>
            <li className="fact-item fact-4">Know Our Stuff</li>
            <li className="fact-item fact-5">We Make Promoters</li>
            <li className="fact-item fact-6">We're Here to Help</li>
          </ul>
        </div>
        <div className="about-video-container">
          <iframe
            src="https://www.youtube.com/embed/uls91MQP3GA"
            title="Funny Tine Commercial: Simply the Best"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-content">
          <h3>Our Story</h3>
          <p>
            Breeze Boss was founded in 2019 by a group of HVAC professionals
            with a passion for helping people. We started out as a small
            operation in Florida, and have since grown to a team of 10+ HVAC
            professionals serving clients all over the globe. We believe in
            treating our clients like family, and we're always here to help.
          </p>
        </div>

        <div className="team-section">
          <div className="team-box">
            <div className="team-member">
              <img src={FFJ} alt="Fix it Felix Jr" />
              <div className="member-info">
                <h4>President</h4>
                <p>E-Mail Felix Jr.</p>
              </div>
            </div>
            <div className="team-member">
              <img src={Ralph} alt="Ralph" />
              <div className="member-info">
                <h4>General Manager - Florida</h4>
                <p>E-Mail Ralph</p>
              </div>
            </div>
          </div>
          <div className="team-box">
            <div className="team-member">
              <img src={HM} alt="Manny" />
              <div className="member-info">
                <h4>Lead Project Superintendent</h4>
                <p>E-Mail Manny</p>
              </div>
              <div className="team-member">
                <img src={Polar} alt="Polar Bear" />
                <div className="member-info">
                  <h4>Project Manager - Corporate</h4>
                  <p>E-Mail Polar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
