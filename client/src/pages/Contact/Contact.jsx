import React, { useState } from "react";
import ContactPageImage from "./../../img/contact-page-image.png";

import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lasName: "",
    email: "",
    phone: "",
    assistance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const res = fetch("http://localhost:8800/contact", formData);
    //   navigate("/");
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="contact-container">
      <div className="contact-page-image">
        <img
          src={ContactPageImage}
          alt="Contact Page"
          className="contact-page-image"
        />
        <div className="contact-title-overlay">
          <h1>Reach Us Anywhere You Go!</h1>
          <p>Fill out the form below to get in contact with us today</p>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-body-top">
          <h1>We’re Here to Help, So Contact Us Today!</h1>
          <p>
            You shouldn’t feel like you have to wait until something isn’t
            working right to speak with your local service company. At Breeze
            Boss in Ft. Myers, we believe customer service is round-the-clock.
            Should you have questions, comments or an idea to share with us,
            feel free to let us know! We'll do our best to help however we can.
          </p>
          <p>Do not hesitate to submit any comments or concerns here.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-input-group">
            <div className="input-with-label">
              <h6>First Name *</h6>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
                required
              />

              <h6>Email *</h6>
              <input
                type="email"
                name="email"
                placeholder="email@company.com"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-with-label">
              <h6>Last Name *</h6>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                required
              />

              <h6>Phone Number *</h6>
              <input
                type="text"
                name="phone"
                placeholder="(123) 456-7890"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <textarea
            name="assistance"
            placeholder="Leave your message here"
            onChange={handleInputChange}
          ></textarea>

          <div className="contact-body-bottom">
            <p>
              Don't worry, we'll use your contact information responsibly and we
              never sell our customer's information!
            </p>
          </div>

          <button className="contact-button" type="submit">
            Send your request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
