import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./App.css";

import About from "./components/about";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron
          style={{
            background: "#fef6f2",
            margin: "0",
            paddingTop: "15%",
            paddingBottom: "15%"
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
              <p>
                Hi! I'm a front-end focused Full Stack Developer.
                <br />
                Passionate about making a social impact in the ever-evolving
                space of technology.
              </p>
              <button class="learn-more">Learn More</button>
            </Container>
          </Fade>
        </Jumbotron>
        <About />
      </div>
    );
  }
}

export default App;
