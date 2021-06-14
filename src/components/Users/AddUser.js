import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [eneteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    onAddUser(enteredUserName, eneteredAge);
    if (
      enteredUserName.trim().length === 0 ||
      eneteredAge.trim().length === 0
    ) {
      return alert("oops");
    }
    if (eneteredAge < 1) {
      return alert("wrong nubmer");
    }
    setEnteredUserName("");
    setEnteredAge("");
  };

  const addUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={addUserNameHandler}
        ></input>
        <label htmlFor="username">Age</label>
        <input
          id="username"
          type="number"
          value={eneteredAge}
          onChange={addAgeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
