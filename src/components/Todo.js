import { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'

function Todo({ todo, toggleTodo, deleteTodo, editTodo }) {
	const todoNameRef = useRef()
  
  function handleTodoClick() {
		toggleTodo(todo.id)
	}
  
  function handleTodoDelete() {
		deleteTodo(todo.id)
	}
  
  function handleTodoEdit() {
		editTodo(todo.id, todoNameRef.current.value)
	}
  
  const crossedStyle = {
    color: 'gray',
    textDecoration: 'line-through',
    border: 'none',
    borderColor: 'transparent'
  }
  
  return (
		<>
      <p>
        <input type='checkbox' checked={todo.complete ? true : false} onChange={handleTodoClick} />
        <input
          ref={todoNameRef}
          type='text'
          style={todo.complete ? crossedStyle : {border: 'none', borderColor: 'transparent'}}
          defaultValue={todo.name}
          onChange={handleTodoEdit}
        />
        <FaTimes onClick={handleTodoDelete} style={{cursor: 'pointer'}} />
      </p>
		</>
	)
}

export default Todo