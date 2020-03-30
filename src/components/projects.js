import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import movie from "../../src/imgs/movie.jpg";
import searchit from "../../src/imgs/searchit.jpg";
import happiest from "../../src/imgs/happiest.jpg";
import deafinitely from "../../src/imgs/deafinitely.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="project-container">
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
          {/* Project 1 Guess That Movie */}
          <Row className="project-row">
            <Col lg={4} sm={12}>
              <h2>Guess That Movie</h2>

              <p>
                A simple game in which the player is prompted with three images
                that are symbolic of a movie. The user must guess the movie
                title to move on to the next set of images. The player wins when
                all movie titles are guessed correctly.
              </p>

              <ul>JavaScript</ul>
              <ul>Sweet Alert</ul>
              <ul>Surge.sh</ul>
              <br />
              {/* Live Heroku Link */}
              <Link
                to="http://moviegame.surge.sh/"
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
                className="project-link"
                to="https://github.com/beverlyosoria/Guess-That-Movie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Link>
            </Col>
            <Col lg={8} sm={12}>
              <Image
                src={movie}
                alt="guess that movie"
                className="project-img"
                rounded
              />
            </Col>
          </Row>
          {/* Project 2 Search It */}
          <Row className="project-row">
            <Col lg={4} sm={12}>
              <h2>Search It</h2>

              <p>
                Search it allows you search for a local business and share your
                consumer experience as deaf or hard of hearing individuals. Sign
                up and Log in to leave a review.
              </p>
              <span>
                <ul>JavaScript</ul>
                <ul> Express </ul>
                <ul>Node.js</ul>
              </span>
              <span>
                <ul>MongoDb</ul>
                <ul>Mongoose</ul>
                <ul>Materialize</ul>
                <ul>Heroku</ul>
              </span>
              <br />
              {/* Live Heroku Link */}
              <Link
                to="https://deaf-friendly.herokuapp.com"
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
                className="project-link"
                to="https://github.com/beverlyosoria/deaf-friendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Link>
            </Col>
            <Col lg={8} sm={12}>
              <Image
                src={searchit}
                alt="search it"
                className="project-img"
                rounded
              />
            </Col>
          </Row>
          {/* Project 3 Happiest Hour */}
          <Row className="project-row">
            <Col lg={4} sm={12}>
              <h2>Happiest Hour</h2>

              <p>A collaborative project as Front-end Developer.</p>
              <p>
                Happiest Hour simplifies organizing a happy hour with your
                coworkers, planning a weekend with your friends, or coordinating
                a soccer practice with your teammates all in one place. Through
                the app, the user can suggest a place, set a time and location
                and share privately with a group of choice.
              </p>

              <ul>Python</ul>
              <ul>Django</ul>
              <ul>Bootstrap</ul>
              <ul>Heroku</ul>
              <br />
              <br />
              {/* Github Repo Link */}
              <Link
                className="project-link"
                to="https://github.com/beverlyosoria/happiest-hour"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Link>
            </Col>
            <Col lg={8} sm={12}>
              <Image
                src={happiest}
                alt="happiest hour"
                className="project-img"
                rounded
              />
            </Col>
          </Row>
          {/* Project 4 Deafinitely Friendly */}
          <Row className="project-row">
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
              <span>
                <ul> Express </ul>
                <ul>Node.js</ul>
                <ul>MongoDb</ul>
              </span>
              <span>
                <ul>Mongoose</ul>
                <ul>Heroku</ul>
              </span>
              <br />
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
                className="project-link"
                to="https://github.com/beverlyosoria/deafinitely-friendly"
                target="_blank"
                rel="noopener noreferrer"
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
