import React from 'react'
import './TodoList.scss'

export default function TodoList() {
  return (
    <div className='todoList'>
        <div className='todoList__row'>
            <div className='todoList__item'>Buy new laptop</div> 
            <div className='todoList__delete'>Delete</div> 
        </div> 
        <div className='todoList__row'>
            <div className='todoList__item'>Complete site build</div> 
            <div className='todoList__delete'>Delete</div> 
        </div> 
        <div className='todoList__row'>
            <div className='todoList__item'>Call new client</div> 
            <div className='todoList__delete'>Delete</div> 
        </div> 
    </div>
  )
}
