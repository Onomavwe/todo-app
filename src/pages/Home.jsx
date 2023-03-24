import React from 'react'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import AddTodo from '../components/add_todo/AddTodo'

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <AddTodo />
      </Container>
    </div>
  )
}
