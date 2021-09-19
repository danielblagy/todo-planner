import { FaTimes } from 'react-icons/fa'

function Todo({ todo, toggleTodo, deleteTodo }) {
	function handleTodoClick() {
		toggleTodo(todo.id)
	}
  
  function handleTodoDelete() {
		deleteTodo(todo.id)
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
        <FaTimes onClick={handleTodoDelete} style={{cursor: 'pointer'}} />
      </p>
		</>
	)
}

export default Todo