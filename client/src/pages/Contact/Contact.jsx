import React, { useState } from "react";
import { Form, Input, Button, Card, Divider } from "antd";
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
        <Card
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="contact-body-top">
            <h1>We’re Here to Help, So Contact Us Today!</h1>
            <p>
              You shouldn’t feel like you have to wait until something isn’t
              working right to speak with your local service company. At Breeze
              Boss in Ft. Myers, we believe customer service is round-the-clock.
              Should you have questions, comments or an idea to share with us,
              feel free to let us know! We'll do our best to help however we
              can.
            </p>
            <p>Do not hesitate to submit any comments or concerns here.</p>
          </div>

          <Divider />

          <Form
            name="contact"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, paddingTop: 20 }}
            onFinish={handleSubmit}
            scrollToFirstError
          >
            <Form.Item
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input onChange={handleInputChange} placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                onChange={handleInputChange}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                onChange={handleInputChange}
                placeholder="(123) 456-7890"
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea
                onChange={handleInputChange}
                placeholder="Leave your message here"
              />
            </Form.Item>
            <div className="contact-body-bottom">
              <p>
                Don't worry, we'll use your contact information responsibly and
                we never sell our customer's information!
              </p>
            </div>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit" className="contact-button">
                Send your request
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
