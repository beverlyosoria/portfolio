import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Jumbotron fluid>
        <Container>
        <h1>Beverly Osoria</h1>
        <p>Hi! I'm a front end focused full stack developer. Passionate about making a social impact in the ever-evolving space of technology.
        </p>
        </Container>
        </Jumbotron>
			</div>
		);
	}
}

export default App;
