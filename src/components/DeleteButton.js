import React from 'react'
import trashIcon from '../assets/icons8-delete-30.png'

function DeleteButton({onDelete}) {
  return (
    <div onClick={onDelete}>
        <button><img src={trashIcon} alt='delete'/></button>
    </div>
  )
}

export default DeleteButton