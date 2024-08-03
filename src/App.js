import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import DateAndTime from "./components/DateAndTime";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";

export const newToDo = createContext();

export default function App() {
  const [toDos, changeToDos] = useState(
    JSON.parse(localStorage.getItem("toDos")) || []
  );

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  function renderTodos() {
    return toDos.map(({ text, time, status }, index) => {
      var timeObject = new Date(time);
      return <TodoList todo={{ text, timeObject, status, index }} />;
    });
  }

  return (
    <div className="container">
      <div className="col-12">
        <div className="row">
          <h1 className="center mt-3">ToDo List</h1>
          <p className="center">Simple ToDo app using React</p>
        </div>
        <div className="row">
          <DateAndTime />
        </div>
        <div className="row">
          <div className="d-grid gap-2 col-6 mx-auto">
            <newToDo.Provider value={{ toDos, changeToDos }}>
              <AddToDo />
            </newToDo.Provider>
          </div>
        </div>
        <div className="row">
          <newToDo.Provider value={{ toDos, changeToDos }}>
            <div className="col-sm-12 mb-3 mb-sm-0">{renderTodos()}</div>
          </newToDo.Provider>
        </div>
      </div>
    </div>
  );
}
