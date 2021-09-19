import { useState, useEffect } from 'react'

import TodoList from './components/TodoList'

const LOCAL_STORAGE_YESTERDAY = 'todo_planner.yesterday_todos'
const LOCAL_STORAGE_TODAY = 'todo_planner.today_todos'
const LOCAL_STORAGE_TOMORROW = 'todo_planner.tomorrow_todos'

function App() {
  const [yesterdayTodos, setYesterdayTodos] = useState([])
  const [todayTodos, setTodayTodos] = useState([])
  const [tomorrowTodos, setTomorrowTodos] = useState([])
  
  // useEffect(() => {
  //   const storedYesterdayTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_YESTERDAY))
  //   const storedTodayTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODAY))
  //   const storedTomorrowTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOMORROW))
    
  //   if (storedYesterdayTodos) setYesterdayTodos(storedYesterdayTodos)
  //   if (storedTodayTodos)     setTodayTodos(storedTodayTodos)
  //   if (storedTomorrowTodos)  setTomorrowTodos(storedTomorrowTodos)
  // }, [])  // called only once, on init
  
  return (
    <div className='App'>
      <TodoList title='Yesterday' todos={yesterdayTodos} setTodos={setYesterdayTodos} storageKey={LOCAL_STORAGE_YESTERDAY} />
      <TodoList title='Today' todos={todayTodos} setTodos={setTodayTodos} storageKey={LOCAL_STORAGE_TODAY} />
      <TodoList title='Tomorrow' todos={tomorrowTodos} setTodos={setTomorrowTodos} storageKey={LOCAL_STORAGE_TOMORROW} />
    </div>
  )
}

export default App