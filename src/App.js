import { useState } from 'react'

import TodoList from './components/TodoList'


function App() {
  const [yesterdayTodos, setYesterdayTodos] = useState([])
  const [todayTodos, setTodayTodos] = useState([])
  const [tomorrowTodos, setTomorrowTodos] = useState([])
  
  return (
    <div className='App'>
      <TodoList title='Yesterday' todos={yesterdayTodos} setTodos={setYesterdayTodos} />
      <TodoList title='Today' todos={todayTodos} setTodos={setTodayTodos} />
      <TodoList title='Tomorrow' todos={tomorrowTodos} setTodos={setTomorrowTodos} />
    </div>
  )
}

export default App