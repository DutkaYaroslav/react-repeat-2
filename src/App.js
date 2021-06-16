import React, { Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = React.useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList data={usersList} />
    </Fragment>
  );
}

export default App;
