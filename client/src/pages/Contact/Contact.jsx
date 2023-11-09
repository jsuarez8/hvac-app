import React, { useState } from "react";
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
      <h1>Let's Get In Touch</h1>
      <p>
        If there are any questions you may have, please do not hesitate to
        submit any comments or concerns here!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
            required
          />
        </div>

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          required
        />

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="email@company.com"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="(123) 456-7890"
            onChange={handleInputChange}
            required
          />
        </div>

        <textarea
          name="assistance"
          placeholder="How Can We Be Of Assistance?"
          onChange={handleInputChange}
        ></textarea>

        <p>
          Don't worry, we'll use your contact information responsibly and we
          never sell our customer's information!
        </p>

        <button className="contact-button" type="submit">
          Send
        </button>
      </form>

      <div className="contact-details">
        <h3>Certified Heating and Cooling</h3>
        {/* address and phone number */}
        <p>5000 Alico Center Rd., Suite ABC</p>
        <p>Fort Myers, FL 33967</p>
        <p>Give Us a Call!!</p>
        <p>(239)123-3456</p>
      </div>
    </div>
  );
}

export default Contact;
