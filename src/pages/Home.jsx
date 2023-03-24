import React from 'react'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import AddTodo from '../components/add_todo/AddTodo'
import TodoList from '../components/todo_list/TodoList'

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <AddTodo />
        <TodoList />
      </Container>
    </div>
  )
}
