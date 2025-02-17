import React from 'react'

function AddButton(props) {
    return (
        <button type="button" className="btn btn-outline-dark btn-lg" onClick={() => props.buttonState.changeAddButtonState(!props.buttonState.addButtonState)}>Add New ToDo</button>
    )
}

export default AddButton