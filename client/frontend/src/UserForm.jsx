import { useState } from "react";
import React from "react";
import Axios from "axios";

const UserForm = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState("");

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name, age, username }]);
    });
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        type="number"
        placeholder="Age"
        onChange={(event) => {
          setAge(parseInt(event.target.value));
        }}
      ></input>
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      ></input>
      <button onClick={createUser}>Create User</button>
    </div>
  );
};

export default UserForm;
