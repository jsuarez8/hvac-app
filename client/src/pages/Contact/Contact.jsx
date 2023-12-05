import { Form, Input, Button, Card, Divider } from "antd";
import "./Contact.scss";

function Contact() {
  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:8800/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);
      console.log("Form data being sent:", values);

      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        console.log("Form data failed to submit");
      }
    } catch (error) {
      console.error("There was an issue with submitting the form", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-title-overlay">
        <h1>Reach Us Anywhere You Go!</h1>
        <p>Fill out the form below to get in contact with us today</p>
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
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input placeholder="(123) 456-7890" />
            </Form.Item>

            <Form.Item name="message" label="Description">
              <Input.TextArea placeholder="Leave your message here" />
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
