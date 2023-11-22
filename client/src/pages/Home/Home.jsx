import React from "react";
import HomePageImage from "./../../img/man-relaxing-on-couch.png";
import { Card, Flex, Typography } from "antd";
import "./Home.scss";
import ServiceBoxes from "../../components/ServiceBoxes/ServiceBoxes.jsx";
import HomePageConsultation from "./../../img/fort-myers-city.png";

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
                  “Expert Plumbing + HVAC Service, Repairs and Replacement -
                  Guaranteed.”
                </p>
              </Typography.Title>
            </Flex>
          </Flex>
        </Card>
      </div>
      {/* Service Boxes Section */}
      <ServiceBoxes />

      <div className="home-paragraph">
        <div className="home-paragraph-container">
          <div className="home-paragraph-title">
            <h1>We're Excited To Meet You!</h1>
            <p>
              Welcome to Breeze Boss, the leading authority in HVAC excellence
              serving the vibrant communities of Fort Myers, Naples, Estero, and
              the broader Southwest Florida area. Our seasoned team of certified
              professionals is dedicated to enhancing your indoor climate with
              superior HVAC solutions. At Breeze Boss, we pride ourselves on our
              legacy of quality, delivering state-of-the-art installations,
              meticulous repairs, and all-encompassing maintenance services
              designed for both residential and commercial settings. In the
              unique warmth of Southwest Florida, Breeze Boss stands out by
              providing customized services that focus on optimizing energy
              efficiency and minimizing costs. We don't just address your HVAC
              needs; we innovate and adapt to ensure that your living and
              working spaces are epitomes of comfort and efficiency year-round.
              Our commitment to your satisfaction is unwavering, as we blend
              traditional values of service with cutting-edge technology.
              Embrace the Breeze Boss difference and feel confident that your
              indoor air quality and comfort are in expert hands. Reach out to
              us for a personalized consultation, and take the first step
              towards a cooler, more comfortable tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-consultation">
        <div className="homepage-consultation-container">
          <img
            src={HomePageConsultation}
            alt="Fort Myers City"
            className="fort-myers-image"
          />
          <div className="homepage-consultation-overlay">
            <h1 className="homepage-consultation-title">
              We Proudly Serve All These Florida Communities
            </h1>
            <p className="homepage-consultation-text">
              Bonita Springs, FL • Cape Coral, FL • Captiva, FL • Estero, FL •
              Fort Myers, FL • Lehigh Acres, FL • Marco Island, FL
              <p>
                • Naples, FL • North Port, FL • Port Charlotte, FL • Punta
                Gorda, FL • Sanibel, FL
              </p>
            </p>
            <p className="homepage-consultation-text-2">
              and Surrounding Communities
            </p>
            <a
              href="http://localhost:3000/services"
              className="homepage-consultation-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHEDULE A CONSULTATION NOW!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
