import React from "react";
import heatingCoolingLogo from "./../../img/heating-cooling-logo.png";
import hvacMaintenanceLogo from "./../../img/hvac-maintenance.png";
import "./Services.scss";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our HVAC Services</h1>
      <div className="services-list">
        <div className="service-card">
          <div className="service-title-image">
            <h2>Heating and Cooling</h2>
            <img src={heatingCoolingLogo} alt="Heating and Cooling" />
          </div>
          <div className="service-text">
            <p>
              Our comprehensive heating services ensure you remain warm and
              comfortable during the chilly seasons. We specialize in the
              installation of advanced heating systems, including furnaces and
              heat pumps, tailored to your specific needs. Our maintenance
              services keep your system running efficiently, while our prompt
              repair services resolve any issues quickly, ensuring your home’s
              warmth and safety.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-title-image">
            <h2>HVAC Maintenance</h2>
            <img src={hvacMaintenanceLogo} alt="Maintenance" />
          </div>
          <div className="service-text">
            <p>
              Experience the peace of mind that comes with our top-tier HVAC
              Maintenance services. At the heart of our offering is a commitment
              to ensuring your heating, ventilation, and air conditioning
              systems operate at peak efficiency year-round. Our expert
              technicians specialize in comprehensive maintenance routines,
              encompassing thorough inspections, timely cleaning, and precise
              tuning of all components. Trust us to provide the meticulous care
              your HVAC system deserves, keeping it running smoothly and
              reliably through every season.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <h3>Ready to get started?</h3>
          <p>
            Contact us today to schedule a consultation with one of our HVAC
            experts.
          </p>
          <a
            href="http://localhost:3000/contact"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT US NOW!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
