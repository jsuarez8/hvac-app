import React from "react";
import { Button } from "antd";
import "./ServiceBoxes.scss";
import heatingCoolingLogo from "./../../img/heating-cooling-logo.png";
import hvacMaintenanceLogo from "./../../img/hvac-maintenance.png";
import airQualityLogo from "./../../img/air-quality-logo.png";

const ServiceBoxes = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-grid">
          {/* Heating */}
          <div className="service-box service-heating-cooling">
            <img
              src={heatingCoolingLogo}
              alt="Heating & Cooling Logo"
              className="service-icon heating-icon"
            />
            <div className="service-content">
              <h3 className="service-title">Heating & Cooling</h3>
              <p className="service-description">
                Ensure your home stays warm and cozy during colder months with
                our efficient heating solutions.
              </p>
            </div>
            <div className="service-action">
              <Button className="service-button">Learn More</Button>
            </div>
          </div>

          {/* Maintenance */}
          <div className="service-box service-maintenance">
            <img
              src={hvacMaintenanceLogo}
              alt="HVAC Maintenance Logo"
              className="service-icon maintenance-icon"
            />
            <div className="service-content">
              <h3 className="service-title">HVAC Maintenance</h3>
              <p className="service-description">
                Stay cool and comfortable during hot weather with our top-notch
                cooling services.
              </p>
            </div>
            <div className="service-action">
              <Button className="service-button">Learn More</Button>
            </div>
          </div>

          {/* Air Quality */}
          <div className="service-box service-air-quality">
            <img
              src={airQualityLogo}
              alt="Air Quality Logo"
              className="service-icon air-quality-icon"
            />
            <div className="service-content">
              <h3 className="service-title">Air Quality</h3>
              <p className="service-description">
                Breathe easier with improved indoor air quality. We help ensure
                your home's air is clean and healthy.
              </p>
            </div>
            <div className="service-action">
              <Button className="service-button">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBoxes;
