function getColor(isDone) {
  return isDone ? 'lightgreen' : 'lightsalmon'
}

function TodoItem({ todo, onDone }) {
  const { id, title, isDone } = todo

  return (
    <div style={{ backgroundColor: getColor(isDone), margin: '5px', padding: '8px' }}>
      {title}
      {!isDone && <button onClick={() => onDone(id)}>המשימה בוצעה</button>}
    </div>
  )
}

export default TodoItem