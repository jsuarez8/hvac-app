import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or require our services, please get in touch!
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
