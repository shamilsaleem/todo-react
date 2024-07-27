import React, { createContext, useState, useEffect } from 'react';
import './App.css'
import DateAndTime from './components/DateAndTime';
import AddToDo from './components/AddToDo';

export const newToDo = createContext();

export default function App() {

  const [toDos, changeToDos] = useState([]);

  useEffect(()=>console.log(toDos), [toDos])

  return (
    <div className="container">
      <div className="col-12">
        <div className="row">
          <h1 className='center mt-3'>ToDo List</h1>
          <p className='center'>Simple ToDo app using React</p>
        </div>
        <div className="row">
          <DateAndTime />
        </div>
        <div className="row">
          <div className="d-grid gap-2 col-6 mx-auto">
            <newToDo.Provider value={{toDos, changeToDos}}>
              <AddToDo />
            </newToDo.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

