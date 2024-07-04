import React, { useContext } from "react";

import { store } from "../../App";
import Nav from "../Nav";

import "./index.css";

const View = ({ getEditItem, getDelItem }) => {
  const [data] = useContext(store);
  console.log(data);

  return (
    <div className="view-bg-container d-flex flex-column justify-content-center align-items-center">
      <Nav />

      {data.length > 0 ? (
        <table className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => getEditItem(item.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="del-btn"
                    onClick={() => getDelItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default View;
