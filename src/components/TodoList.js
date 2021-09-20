import { useEffect, useRef } from 'react'
import { v4 } from 'uuid'
import { FaPlus } from 'react-icons/fa'

import Todo from './Todo'

function TodoList({ title, todos, setTodos, storageKey }) {
	useEffect(() => {
    console.log('todolist init')
    
    const storedTodos = JSON.parse(localStorage.getItem(storageKey))
    
    if (storedTodos) setTodos(storedTodos)
  }, [setTodos, storageKey])  // called only once, on init
  
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos))
  }, [storageKey, todos])
  
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
  
  function deleteTodo(id) {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }
  
  function editTodo(id, newName) {
    if (newName === '')
      return
    
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.name = newName
    setTodos(newTodos)
  }
  
  return (
		<div className='TodoList'>
			<h2>{title}</h2>
      
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      })}
      
      <input ref={todoNameRef} type='text' />
      <FaPlus onClick={handleAddTodo} style={{cursor: 'pointer'}} />
		</div>
	)
}

export default TodoList