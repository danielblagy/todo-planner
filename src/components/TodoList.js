import { useEffect, useRef } from 'react'
import { v4 } from 'uuid'
import { FaPlus } from 'react-icons/fa'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import Todo from './Todo'

function TodoList({ title, todos, setTodos, storageKey }) {
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos))
  }, [storageKey, todos])
  
  const todoNameRef = useRef()
  
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '')
      return
    
    setTodos(prevTodos => {
      return [...prevTodos, {id: v4(), name: name, complete: false}]
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
  
  // update the order of the todos array
  function handleOnDragEnd(e) {
    // Preventing errors from dragging out of bounds
    if (!e.destination) return
    
    const newTodos = [...todos]
    const [reorderedTodo] = newTodos.splice(e.source.index, 1)
    newTodos.splice(e.destination.index, 0, reorderedTodo)
    
    setTodos(newTodos)
  }
  
  return (
		<div className='TodoList'>
			<h2>{title}</h2>
      
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todos'>
          {(provided) => (
            <div className='todos' {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
              })}
              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      
      <input ref={todoNameRef} type='text' />
      <FaPlus onClick={handleAddTodo} style={{cursor: 'pointer'}} />
		</div>
	)
}

export default TodoList