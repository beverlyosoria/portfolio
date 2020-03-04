import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          {/* Project 4 Deafinitely Friendly */}
          <Row>
            <Col lg={4} sm={12}>
              <h2>Deafinitely Friendly</h2>

              <p>
                Deafinitely Friendly allows you to search for local businesses,
                rate and post reviews based on the criteria of
                deaf-friendliness. Sign up, Log in to leave a review or simply
                browse reviews left by previous users.
              </p>

              <ul>JavaScript</ul>
              <ul>React </ul>
              <ul>MDB React</ul>
              <ul> Express </ul>
              <ul>Node.js</ul>
              <ul>MongoDb</ul>
              <ul>Mongoose</ul>
              <ul>Heroku</ul>
              {/* Live Heroku Link */}
              <Link
                to="https://deafinitely-friendly.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                <button id="project-button" className="learn-more">
                  See Live
                </button>
              </Link>
              {/* Github Repo Link */}
              <Link
                to="https://github.com/beverlyosoria/deafinitely-friendly"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Source Code
              </Link>
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
