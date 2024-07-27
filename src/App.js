import React from 'react';
import './App.css'
import DateAndTime from './components/DateAndTime';

export default function App() {
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
      </div>
    </div>
  );
}

