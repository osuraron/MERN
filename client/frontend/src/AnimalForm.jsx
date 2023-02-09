import { useState } from "react";
import React from "react";
import Axios from "axios";

const AnimalForm = () => {
  const [listOfAnimals, setListOfAnimals] = useState([]);
  const [animal, setAnimal] = useState("");
  const [type, setType] = useState(0);

  const createAnimal = () => {
    Axios.post("http://localhost:3001/createAnimal", {
      animal: animal,
      type: type,
    }).then((response) => {
      setListOfAnimals([...listOfAnimals, { animal: animal, type: type }]);
    });
  };

  return (
    <div className="UserInput">
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setAnimal(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Type"
        onChange={(event) => {
          setType(event.target.value);
        }}
      ></input>
      <button onClick={createAnimal}>Create Animal</button>
    </div>
  );
};

export default AnimalForm;
