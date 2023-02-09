import React, { useState, useEffect } from "react";
import Axios from "axios";

const AnimalList = () => {
  const [listOfAnimals, setListOfAnimals] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getAnimals").then((response) => {
      setListOfAnimals(response.data);
    });
  }, []);

  return (
    <div className="usersDisplay">
      {listOfAnimals.map((animals) => {
        return (
          <div>
            <h1>Name:{animals.animal}</h1>
            <h1>Type:{animals.type}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default AnimalList;
