import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'ללמוד ריאקט', isDone: true },
    { id: 2, title: 'לעשות שיעורי בית', isDone: false },
    { id: 3, title: 'לקנות חלב', isDone: false },
  ])

  return (
    <div>
      <h1>רשימת משימות</h1>
      {todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList