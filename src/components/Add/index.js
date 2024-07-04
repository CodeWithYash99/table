import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { store } from "../../App";
import Nav from "../Nav";

import "./index.css";

const Add = ({ arr, onChangeArrName, onChangeArrEmail }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useContext(store);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newEntry = {
      id: uuidv4(),
      name,
      email,
    };

    setData([...data, newEntry]);
    setName("");
    setEmail("");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="add-bg-container d-flex flex-column justify-content-center align-items-center">
      <Nav />

      <form
        action=""
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          className=""
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="email"
          className=""
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />
        <input type="submit" className="" value="Submit" />
      </form>
    </div>
  );
};

export default Add;
