import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { kebabCase } from "lodash";

class App extends Component {
  onClick = () => {
    console.log("Test, test, test, test!");
    console.log("123123124123");
    console.log("TEEEEEEEEEST");
    console.log("TEEEEEEEEEST2");
    console.log("asdasdasd");
    console.log("asdasdasd123123");
    console.log("Kebab case!: ", kebabCase);
    alert("AAAAAAAA this button does nothing!");
    alert("FORKED!");
    alert("FORKED!2");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onClick}>CLICK ME</button>
        </header>
      </div>
    );
  }
}

export default App;
