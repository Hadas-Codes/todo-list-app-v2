function getColor(isDone) {
  return isDone ? 'lightgreen' : 'lightsalmon'
}

function TodoItem({ todo }) {
  const { title, isDone } = todo

  return (
    <div style={{ backgroundColor: getColor(isDone), margin: '5px', padding: '8px' }}>
      {title}
    </div>
  )
}

export default TodoItem