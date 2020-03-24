import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              Contact
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
