import React, { Component } from 'react';
import Button from "./Button";
import Panel from "./Panel";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Welt"
    }

    setTimeout(() => {
      // this.state.name = "Venus";
      this.setState({
        name: "Venus"
      })
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <h2>Hallo {this.state.name}!</h2>
        <p>{this.state.name.length}</p>
      </div>
    );
  }
}

export default App;
