import React, { useContext } from "react";
import { newToDo } from "../App";

function TodoList(props) {
  const newToDoOps = useContext(newToDo);

  function toDoStatechange(key) {
    newToDoOps.changeToDos(newToDoOps.toDos.map((toDo, index) => {
      if (index === key) {
        return { ...toDo, status: !toDo.status }
      }
      return toDo
    }))
  }

  function delToDo(key) {
    var newToDoList = []
    newToDoOps.toDos.map((toDo, index) => {
      if (index !== key) {
        newToDoList.push(toDo)
      }
    })
    newToDoOps.changeToDos(newToDoList)
  }

  return (
    <div key={props.todo.index} className="card mt-3">
      <div className="card-header">
        #{props.todo.index + 1} · {props.todo.timeObject.getHours()}:
        {props.todo.timeObject.getMinutes() >= 10 ? props.todo.timeObject.getMinutes() : "0" + props.todo.timeObject.getMinutes()}
        <div className="float-end">
          <i className="fa-solid fa-trash" style={{ marginRight: "4px" }} onClick={() => delToDo(props.todo.index)}></i>
          {props.todo.status ? <input className="form-check-input"
            type="checkbox"
            onChange={() => toDoStatechange(props.todo.index)} /> :
            <input className="form-check-input"
              type="checkbox"
              onChange={() => toDoStatechange(props.todo.index)} checked />}
        </div>
      </div>
      <div className="card-body">
        {props.todo.status ? <h5 className="card-title">{props.todo.text}</h5> : <h5 className="card-title text-body-secondary"><del>{props.todo.text}</del></h5>}
      </div>
    </div>
  );
}

export default TodoList;
