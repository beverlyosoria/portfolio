import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p>
          <a
            className="footer-link"
            href="https://github.com/beverlyosoria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-github" aria-hidden="true" />
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/beverlyosoria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </p>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>©2020 BEVERLY OSORIA </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
