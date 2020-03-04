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
            <Col lg={4} sm={12}>
              <h2>Deafinitely Friendly</h2>

              <p>
                a full-stack web application working with React and a third
                party API to search for local businesses and post reviews.
                User’s data is stored on a backend created using Node, Express,
                and MongoDB. Includes user authentication with JWT.
              </p>

              <p>
                A reconstructed version of Search It. Rate and post reviews for
                a local business based on the criteria of deaf-friendliness.
              </p>
            </Col>
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
