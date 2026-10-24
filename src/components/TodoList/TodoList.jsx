import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import TodoForm from '../TodoForm/TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'ללמוד ריאקט', isDone: true },
    { id: 2, title: 'לעשות שיעורי בית', isDone: false },
    { id: 3, title: 'לקנות חלב', isDone: false },
  ])

  function addTodo(title) {
    const newTodo = { id: Date.now(), title, isDone: false }
    setTodos([...todos, newTodo])
  }

  function markDone(id) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    )
  )
}

  return (
    <div>
      <h1>רשימת משימות</h1>
      <TodoForm onAdd={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}  onDone={markDone}/>
      ))}
    </div>
  )
}

export default TodoList