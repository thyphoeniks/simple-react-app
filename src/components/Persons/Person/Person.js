import React from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass_0";

const person = props => {
  return (
    <Aux>
      <p onClick={props.click}>
        I am a {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

export default withClass(person, classes.Person);
