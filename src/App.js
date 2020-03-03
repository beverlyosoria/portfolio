import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";

import About from "./components/about";
import Projects from "./components/projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron
          style={{
            background: "#fef6f2",
            margin: "0",
            paddingTop: "18%",
            paddingBottom: "20%"
          }}
          fluid
        >
          <Fade left duration={2000}>
            <Container>
              <h1
                style={{
                  fontSize: "400%",
                  fontWeight: "600"
                }}
              >
                Beverly Osoria
              </h1>
              <p style={{ fontSize: "150%" }}>
                Hi! I'm a front-end focused Full Stack Developer.
                <br />
                Passionate about making a social impact in the ever-evolving
                space of technology.
              </p>
              <Link
                to="#about"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                <button class="learn-more">Learn More</button>
              </Link>
            </Container>
          </Fade>
        </Jumbotron>
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
