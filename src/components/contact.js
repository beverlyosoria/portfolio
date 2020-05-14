import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "Sweet!",
          text: "Your message has been sent.",
          showConfirmButton: false,
          timer: 2300,
          timerProgressBar: true,
          background: "#fcefe8",
        });
        this.setState({ name: "", email: "", message: "" });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact-container">
        <Fade bottom duration={2000}>
          <h1
            style={{
              fontWeight: "600",
              fontSize: "60px",
              textAlign: "center",
              marginBottom: "3%",
            }}
          >
            Contact Me
          </h1>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <p style={{ textAlign: "center", marginBottom: "10%" }}>
                  Feel free to get in touch anytime
                </p>
              </Col>
            </Row>

            <div className="circle-form">
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
                        required
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
                      <button
                        id="submit-button"
                        className="learn-more"
                        type="submit"
                      >
                        Send
                      </button>
                    </Col>
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>

            <Col md={{ span: 6, offset: 3 }}>
              <p style={{ textAlign: "center", marginTop: "10%" }}>
                Or, just email me directly at &nbsp;
                <a
                  className="contact-link"
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
        </Fade>
      </div>
    );
  }
}

export default Contact;
