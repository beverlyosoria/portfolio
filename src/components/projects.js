import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import deafinitely from "../../src/imgs/deafinitely.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "3%"
          }}
        >
          Projects
        </h1>
        <Container>
          {/* Project 1 Deafinitely Friendly */}
          <Row>
            <Col lg={4} sm={12}></Col>

            <Col lg={8} sm={12}>
              <Image
                src={deafinitely}
                alt="deafinitely friendly"
                className="project-img"
                rounded
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
