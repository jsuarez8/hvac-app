import React from "react";
import { Collapse } from "antd";
import HomePageImage from "./../../img/man-relaxing-on-couch.png";
import { Card, Flex, Typography } from "antd";
import "./Home.scss";
import ServiceBoxes from "../../components/ServiceBoxes/ServiceBoxes.jsx";
import HomePageConsultation from "./../../img/fort-myers-city.png";
import Logo from "./../../img/logo-1.png";

const { Panel } = Collapse;

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

      {/* More About Us Section */}

      <div className="service-info">
        <div className="service-image-wrapper">
          <img src={Logo} alt="Service Logo" className="service-image" />
        </div>
        <div className="service-content">
          <h2>More About Our Service at Breeze Boss Ft. Myers</h2>
          <p>
            When Breeze Boss Ft. Myers first opened for business in 1988, we set
            out with a goal that’s precisely the same as it is today: giving you
            the best possible service whatever the problem is. From making
            repairs to new installation, every job starts with dedicating
            ourselves to finding a solution that works for you.
          </p>
          <p>
            So what can Breeze Boss Ft. Myers offer?
            <ol>
              <li>
                Certified Experts: Our technicians and installers bring years of
                HVAC experience to the table. From brand-new mini-splits to
                cutting-edge geothermal heat pumps, we understand how to meet
                your unique comfort needs with the highest standards of customer
                service.{" "}
              </li>
              <li>
                A Complete Sense of Comfort: Mild temperatures are important to
                home comfort, but there’s a lot more to it. Our indoor air
                quality professionals can improve humidity levels and airflow
                while also reducing airborne pollution.{" "}
              </li>
              <li>
                Honest, yet Tailored Solutions: We’re always straightforward
                about what we think works best for you. We never rely on
                unexpected costs or confusing industry terms. You can trust that
                our recommendations mean more long-term savings and higher
                energy efficiency.
              </li>
            </ol>
          </p>
        </div>
        <div className="faq-container">
          <div className="faq-card">
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
            </div>
            <Collapse className="faq-accordion" accordion>
              <Panel
                header="Why does turning my device off and on again solve all issues?"
                key="1"
              >
                <p>
                  Because it clears the memory and starts the system from
                  scratch.
                </p>
              </Panel>

              <Panel
                header="Why does turning my device off and on again solve all issues?"
                key="2"
              >
                <p>
                  Because it clears the memory and starts the system from
                  scratch.
                </p>
              </Panel>

              <Panel
                header="Why does turning my device off and on again solve all issues?"
                key="3"
              >
                <p>
                  Because it clears the memory and starts the system from
                  scratch.
                </p>
              </Panel>

              <Panel
                header="Why does turning my device off and on again solve all issues?"
                key="4"
              >
                <p>
                  Because it clears the memory and starts the system from
                  scratch.
                </p>
              </Panel>
            </Collapse>
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
