import { useRef } from 'react'
import { v4 } from 'uuid'
import { BiPlus } from 'react-icons/bi'

import Todo from './Todo'

function TodoList({ title, todos, setTodos }) {
	const todoNameRef = useRef()
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '')
      return
    
    setTodos(prevTodos => {
      return [...prevTodos, {id: v4(), name: name, completed: false}]
    })
      
    todoNameRef.current.value = null
  }
  
  return (
		<div className='TodoList'>
			<h2>{title}</h2>
      
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })}
      
      <input ref={todoNameRef} type='text' />
      <BiPlus onClick={handleAddTodo} />
		</div>
	)
}

export default TodoList