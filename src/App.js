import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mohamed", age: "29" },
      { name: "Meryeme", age: "15" },
      { name: "Brahim", age: "23" }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "29" },
        { name: "Meryeme", age: "15" },
        { name: "Brahim", age: "40" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Mohamed", age: "29" },
        { name: event.target.value, age: "15" },
        { name: "Brahim", age: "23" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi! I am a react app!</h1>
        <p>This is working perfectly</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Mohamed!!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Simo!")}
          changed={this.nameChangedHandler}
        >
          My hobbies: soccer
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
