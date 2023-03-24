import React from 'react'
import './AddTodo.scss'

export default function AddTodo() {
  return (
    <div className="addTodo">
        <input className="addTod__input" type="text" placeholder="Add a todo" />
        <button className="addTod__button">Add</button>
    </div>
  )
}
