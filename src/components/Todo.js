function Todo({ todo, toggleTodo }) {
	function handleTodoClick() {
		toggleTodo(todo.id)
	}
  
  const crossedStyle = {
    color: 'gray',
    textDecoration: 'line-through',
  }
  
  return (
		<>
      <p style={todo.complete ? crossedStyle : {}}>
        <input type='checkbox' checked={todo.complete ? true : false} onChange={handleTodoClick} />
        {todo.name}
      </p>
		</>
	)
}

export default Todo