import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-container">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "3%"
          }}
        >
          Contact Me
        </h1>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <p style={{ textAlign: "center" }}>
                Feel free to get in touch anytime
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Col md={{ span: 6, offset: 3 }}>
                  <Form.Label>Your Name: </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Col md={{ span: 6, offset: 3 }}>
                  <Form.Label>Your Email: </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Col md={{ span: 6, offset: 3 }}>
                  <Form.Label>Message: </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Col md={{ span: 6, offset: 3 }}>
                  <button id="contact-btn" type="submit">
                    Send
                  </button>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
          <Col md={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "center" }}>
              Or, just email me directly at &nbsp;
              <a
                href="mailto:bevosoria@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                bevosoria@gmail.com
              </a>
              .
            </p>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Contact;
