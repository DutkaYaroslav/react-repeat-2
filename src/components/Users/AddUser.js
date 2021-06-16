import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [eneteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const enteredUserNameViaRed = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredUserNameViaRed.current.value;

    if (enteredName.trim().length === 0 || eneteredAge.trim().length === 0) {
      return setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
    }
    if (Number(eneteredAge) < 1) {
      return setError({
        title: "Invalid age",
        message: "Age can't be 0 or less",
      });
    }
    onAddUser(enteredName, eneteredAge);
    enteredUserNameViaRed.current.value = "";
    setEnteredAge("");
  };

  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={enteredUserNameViaRed}></input>
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
    </React.Fragment>
  );
};

export default AddUser;
