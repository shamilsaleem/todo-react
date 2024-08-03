import React, { useEffect, useRef, useState, useContext } from 'react'
import { newToDo } from '../../App';

function AddInput(props) {
    const [newToDoRaw, changeNewToDoRaw] = useState("")

    const inputElement = useRef();
    useEffect(() => {
        inputElement.current.focus();
    }, [])

    const newToDoOps = useContext(newToDo);
    function updateToDo() {
        if (newToDoRaw !== '') {
            newToDoOps.changeToDos([{ text: newToDoRaw, time: new Date(), status: true }, ...newToDoOps.toDos]);
            props.buttonState.changeAddButtonState(!props.buttonState.addButtonState)
        } else {
            props.buttonState.changeAddButtonState(!props.buttonState.addButtonState)
        }
    }

    return (
        <input ref={inputElement}
            value={newToDoRaw}
            type="text"
            className="form-control form-control-lg custom-placeholder"
            placeholder='write here...'
            onChange={(e) => changeNewToDoRaw(e.target.value)}
            onBlur={updateToDo}
            onKeyUp={(e) => e.key === "Enter" ? updateToDo() : null}
        />
    )
}

export default AddInput