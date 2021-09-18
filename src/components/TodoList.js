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
  
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  return (
		<div className='TodoList'>
			<h2>{title}</h2>
      
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      })}
      
      <input ref={todoNameRef} type='text' />
      <BiPlus onClick={handleAddTodo} style={{cursor: 'pointer'}} />
		</div>
	)
}

export default TodoList