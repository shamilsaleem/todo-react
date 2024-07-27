import React, { useState } from 'react'
import AddButton from './input/AddButton'
import AddInput from './input/AddInput'

function AddToDo() {
  const [addButtonState, changeAddButtonState] = useState(true)

  return (
    addButtonState ? <AddButton buttonState={{ addButtonState, changeAddButtonState }} /> : <AddInput buttonState={{ addButtonState, changeAddButtonState }} />
  )
}

export default AddToDo