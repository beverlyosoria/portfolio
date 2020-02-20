import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import avatar from "../../src/imgs/beverly.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col sm={6}>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "60px",
                  textAlign: "left",
                  marginBottom: "5%"
                }}
              >
                About Me
              </h1>
              <Image src={avatar} alt="avatar" className="avatar-img" rounded />
            </Col>

            <Col sm={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              numquam libero ab asperiores explicabo doloremque inventore
              ducimus debitis perspiciatis dignissimos! Saepe quod dolores
              veniam quam distinctio ab perspiciatis minima quo?
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
