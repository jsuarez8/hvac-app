import React from "react";
import HomePageImage from "./../../img/man-relaxing-on-couch.png";
import { Card, Flex, Typography } from "antd";
import "./Home.scss";
import ServiceBoxes from "../../components/ServiceBoxes/ServiceBoxes.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="home-page"></div>
      <div className="image-section">
        <Card className="home-card">
          <Flex className="card-content">
            <img
              alt="Home Service"
              src={HomePageImage}
              className="home-image"
            />
            <Flex className="slogan-flex">
              <Typography.Title level={2} className="slogan-title">
                Your Comfort, Our Commitment
              </Typography.Title>

              <Typography.Title level={3} className="slogan-text">
                <p>
                  {" "}
                  “Expert Plumbing + HVAC Service, Repairs and
                  Replacement–Guaranteed.”
                </p>
              </Typography.Title>
            </Flex>
          </Flex>
        </Card>
      </div>

      {/* Schedule Consultation Section */}
      <div className="consultation-section">
        <h2 className="consultation-title">Schedule a Free Consultation Now</h2>
        <p>How can we help?</p>
        {/* Dropdown with Services */}
        <select name="services" id="services-dropdown">
          <option value="none"></option>
          <option value="service1">Filter Change</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
          {/* ... */}
        </select>
      </div>
      {/* Service Boxes Section */}
      <ServiceBoxes />
    </div>
  );
};

export default Home;
