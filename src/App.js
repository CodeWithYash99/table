import React, { createContext, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Add from "./components/Add";
import View from "./components/View";

import "./App.css";

export const store = createContext();

const App = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getEditItem = (id) => {
    const item = data.find((item) => item.id === id);
    console.log(item);
    navigate('/');
  };

  const getDelItem = (id) => {
    setData(data.filter((item) => item.id!== id));
  };

  return (
    <store.Provider value={[data, setData]}>
      <div className="App-container d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<Add />} />
          <Route
            path="/view"
            element={<View getEditItem={getEditItem} getDelItem={getDelItem} />}
          />
        </Routes>
      </div>
    </store.Provider>
  );
};

export default App;
