import React, { useState, useEffect } from "react";
import "./todo.css";
import { HiX } from "react-icons/hi";

//get localstroage data
const getData = () => {
  let item = localStorage.getItem("lists");
  if (item) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
const Todoui = () => {
  const [input, setinput] = useState("");
  const [list, setList] = useState(getData());
  //set data into localstorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    if (!input) {
    } else if (e.key === "Enter" || e.target.textContent === "Add") {
      setList([...list, input]);

      setinput("");
    }
  };
  const deleteItem = (id) => {
    console.log("delete");
    const updatelist = list.filter((items, index) => {
      return index !== id;
    });
    setList(updatelist);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="box-data">
          <h1>Add Tod0s here....</h1>
          <input
            type="text"
            value={input}
            required
            id="name"
            placeholder="write something..."
            onChange={(e) => {
              setinput(e.target.value);
            }}
            onKeyDown={handleSubmit}
          />

          <button className="btn" name="btn" onClick={handleSubmit}>
            Add
          </button>
          {list.map((itemval, ind) => {
            return (
              <div className="todo-div">
                {itemval}
                <HiX
                  className="icons"
                  onClick={() => {
                    deleteItem(ind);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todoui;
