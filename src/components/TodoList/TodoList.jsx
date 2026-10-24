import { useState } from 'react'

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
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

export default TodoList