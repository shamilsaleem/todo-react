import React, {useState} from 'react'

function TodoList(props) {
    console.log(props)

    const[Done, ChangeDone] = useState({})
    
    
    return (
        <div key={props.todo.index} className="card mt-3">
            <div className="card-header">
                #{props.todo.index + 1} · {props.todo.time.getHours()}:{props.todo.time.getMinutes()}
                <input className="form-check-input float-end"
                       type="checkbox" 
                       onChange={changeStatus}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.todo.text}</h5>
            </div>
        </div>
    )
}

export default TodoList



