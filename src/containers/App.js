import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      { id: "10", name: "Mohamed", age: 29 },
      { id: "20", name: "Meryeme", age: 15 },
      { id: "30", name: "Brahim", age: 23 }
    ],
    showPersons: false,
    clickedCounter: 0,
    authenticated: false
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        clickedCounter: prevState.clickedCounter + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deleted={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit
          login={this.loginHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          appTitle={this.props.title}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {" "}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
