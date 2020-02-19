import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
        
        <Jumbotron style={{background:'#fef6f2', marginTop: "10%" }} fluid >
        <Fade left duration={2000}>
        <Container>
        
        <h1 style={{
          fontSize: "400%",
          fontWeight: "600"
        }}>Beverly Osoria</h1>
        <p>Hi! I'm a front end focused full stack developer.
          <br />
        Passionate about making a social impact in the ever-evolving space of technology.
        </p> 
        <button class="learn-more">Learn More</button>
       
        </Container>
        </Fade>
        </Jumbotron>
        
			</div>
		);
	}
}

export default App;
