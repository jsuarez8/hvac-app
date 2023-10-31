import React from "react";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our HVAC Services</h1>
      <div className="services-list">
        <div className="service-card">
          <h2>Heating</h2>
          <p>
            Stay warm during the winter with our top-notch heating solutions.
          </p>
        </div>
        <div className="service-card">
          <h2>Cooling</h2>
          <p>Beat the heat with our efficient cooling systems.</p>
        </div>
        <div className="service-card">
          <h2>Ventilation</h2>
          <p>
            Ensure clean air circulation in your premises with our ventilation
            services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
