import { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'ללמוד ריאקט', isDone: true },
    { id: 2, title: 'לעשות שיעורי בית', isDone: false },
    { id: 3, title: 'לקנות חלב', isDone: false },
  ])

   const [newTitle, setNewTitle] = useState('')

  function addTodo(e) {
    e.preventDefault()
    if (newTitle.trim() === '') return

    const newTodo = { id: Date.now(), title: newTitle, isDone: false }
    setTodos([...todos, newTodo])
    setNewTitle('')
  }

  return (
    <div>
      <h1>רשימת משימות</h1>

      <form onSubmit={addTodo}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="משימה חדשה"
        />
        <button type="submit">אישור</button>
      </form>

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList