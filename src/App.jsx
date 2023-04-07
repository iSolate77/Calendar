import React, { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import moment from 'moment'
import { fetchEnglishData } from './services/firebase'

export default function App() {
  const [date, setDate] = useState(moment())
  const [semester, setSemester] = useState(1)
  const [inputVisible, setInputVisible] = useState(true)
  const [weeks, setWeeks] = useState('')
  const [selectedElements, setSelectedElements] = useState([])
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const element = 'English'
    const fetchData = async () => {
      if (selectedElements.includes(element)) {
        const data = await fetchEnglishData()
        setInfo(data)
      }
    }
    fetchData()
  }, [selectedElements])

  const dateHandler = (e) => {
    e.preventDefault()
    const selectedDate = moment(e.target.value)
    if (selectedDate.day() === 0) {
      setDate(selectedDate)
    } else {
      alert('Please select a Sunday as the starting day.')
    }
  }

  const semesterHandler = (e) => {
    e.preventDefault()
    setSemester(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setInputVisible(false)
  }

  const resetHandler = () => {
    setDate(null)
    setSemester(null)
  }

  const cancelHandler = () => {
    setInputVisible(false)
  }

  const weekHandler = (e) => {
    e.preventDefault()
    setWeeks(e.target.value)
  }

  const inputBoxHandler = () => {
    setInputVisible(!inputVisible)
  }

  return (
    <div className='h-screen'>
      <Navbar
        selectedElements={selectedElements}
        setSelectedElements={setSelectedElements}
      >
        <button onClick={inputBoxHandler} className='w-full text-start'>
          Toggle input
        </button>
      </Navbar>
      <Calendar
        inputVisible={inputVisible}
        date={date}
        semester={semester}
        weeks={weeks}
        selectedElements={selectedElements}
        info={info}
        handlers={{
          inputBoxHandler,
          submitHandler,
          resetHandler,
          cancelHandler,
          semesterHandler,
          weekHandler,
          dateHandler,
        }}
      />
    </div>
  )
}
