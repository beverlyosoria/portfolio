import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import avatar from "../../src/imgs/beverly.jpg";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "3%"
          }}
        >
          About Me
        </h1>
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <Image src={avatar} alt="avatar" className="avatar-img" rounded />
            </Col>

            <Col lg={8} sm={12}>
              <div className="circle"></div>
              <br />
              <p>
                I have worked throughout the stack but especially love working
                with ReactJS.
                <br />
                Outside of code, I like to create in other ways. From
                photography to painting, I'm always looking for new ways to
                express myself.
                <br />
                My education and experience with software engineering has made
                me particularly interested in the intersection of mass media and
                technology. I feel strongly that code is an important way to
                convey information and can be used as a tool to inform, educate,
                and promote social change.
                <br />I want to enable technology for the good and help create
                solutions for the overlooked and underserved communities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
