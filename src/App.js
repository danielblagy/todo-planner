import { useState, useEffect } from 'react'

import TodoList from './components/TodoList'

const LOCAL_STORAGE_YESTERDAY = 'todo_planner.yesterday_todos'
const LOCAL_STORAGE_TODAY = 'todo_planner.today_todos'
const LOCAL_STORAGE_TOMORROW = 'todo_planner.tomorrow_todos'
const LOCAL_STORAGE_LAST_DAY = 'todo_planner.last_day'

function App() {
  const [yesterdayTodos, setYesterdayTodos] = useState([{id: "64eaca0b-a400-437b-b15d-e45cef4b5812", name: "to be deleted", completed: false, complete: true}])
  const [todayTodos, setTodayTodos] = useState([{
    "id": "ec890db9-1c07-4421-b871-852678d0b1fe",
    "name": "it used to be today",
    "completed": false,
    "complete": true
  }, {
    "id": "c2d68c21-6c15-47d5-9f89-48162bdfe776",
    "name": "haha, hasn't been done",
    "completed": false
  }])
  const [tomorrowTodos, setTomorrowTodos] = useState([
    {
      "id": "fb4a869d-7f96-45ef-9a64-27c76b4574ec",
      "name": "now it's today",
      "completed": false
    }
  ])
  const [lastDay, setLastDay] = useState(new Date())
  
  const dateFormat = { year: '2-digit', month: 'numeric', day: 'numeric' }
  const [yesterdayDate, setYesterdayDate] = useState('')
  const [todayDate, setTodayDate] = useState('')
  const [tomorrowDate, setTomorrowDate] = useState('')
  
  useEffect(() => {
    function isSameDay(d1, d2) {
      return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
    }
    
    function isNextDay(d1, d2) {
      d1.setDate(d1.getDate() + 1)
      return isSameDay(d1, d2)
    }
    
    function isDayAfterNext(d1, d2) {
      d1.setDate(d1.getDate() + 2)
      return isSameDay(d1, d2)
    }
    
    console.log('lastDay init')
    
    const storedlastDay = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LAST_DAY))
    
    if (storedlastDay) setLastDay(storedlastDay)
    
    const today = new Date()
    
    if (isSameDay(today, lastDay)) {console.log('same day')}
    
    else if (isNextDay(new Date(lastDay), today)) {
      setYesterdayTodos(todayTodos)
      setTodayTodos(tomorrowTodos)
      setTomorrowTodos([])
      console.log('next day')
    }
    
    else if (isDayAfterNext(new Date(lastDay), today)) {
      setYesterdayTodos(tomorrowTodos)
      setTodayTodos([])
      setTomorrowTodos([])
      console.log('day after next')
    }
    
    else {
      setYesterdayTodos([])
      setTodayTodos([])
      setTomorrowTodos([])
      console.log('long time ago')
    }
    
    setLastDay(today)
  }, [])  // called only once, on init
  
  useEffect(() => {
    console.log('lastDay change')
    
    localStorage.setItem(LOCAL_STORAGE_LAST_DAY, JSON.stringify(lastDay))
    
    const yesterday = new Date(lastDay)
    yesterday.setDate(yesterday.getDate() - 1)
    
    const tomorrow = new Date(lastDay)
    tomorrow.setDate(tomorrow.getDate() + 1)
    
    setYesterdayDate('Yesterday ' + yesterday.toLocaleDateString('en-US', dateFormat))
    setTodayDate('Today ' + lastDay.toLocaleDateString('en-US', dateFormat))
    setTomorrowDate('Tomorrow ' + tomorrow.toLocaleDateString('en-US', dateFormat))
  }, [lastDay])
  
  return (
    <div className='App'>
      <TodoList title={yesterdayDate} todos={yesterdayTodos} setTodos={setYesterdayTodos} storageKey={LOCAL_STORAGE_YESTERDAY} />
      <TodoList title={todayDate} todos={todayTodos} setTodos={setTodayTodos} storageKey={LOCAL_STORAGE_TODAY} />
      <TodoList title={tomorrowDate} todos={tomorrowTodos} setTodos={setTomorrowTodos} storageKey={LOCAL_STORAGE_TOMORROW} />
    </div>
  )
}

export default App