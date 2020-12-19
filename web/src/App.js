import "./App.css";

import React, { Component } from "react";
import { addPerson, getPersons } from "./redux/actions/personActions";

import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      name: "",
    };
  }

  componentDidMount = () => {
    getPersons().then((response) => {
      this.setState({ persons: response });
    });
  };
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  add = () => {
    addPerson(this.state.name).then((response) => {
      this.setState({ persons: response });
    });
    console.log(this.state.name);
  };

  render() {
    console.log("In render", this.state.persons);
    return (
      <div className="App">
        <header className="App-header">
          <label>{this.state.output}</label>
          <input type="text" name="name" onChange={(e) => this.onChange(e)} />
          <button
            onClick={() => {
              this.add();
            }}
          >
            Add
          </button>

          <ul>
            {this.state.persons &&
              this.state.persons.map((person) => {
                return (
                  <li key={person.id}>
                    <img src={person.image} style={{ width: 50, height: 50 }} />
                    <br />
                    {person.name}
                  </li>
                );
              })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
