import React from 'react'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import AddTodo from '../components/add_todo/AddTodo'
import TodoList from '../components/todo_list/TodoList'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </Container>
    </div>
  )
}
