import React, { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'
import moment from 'moment'
import { fetchSyllabiData } from './services/firebase'

export default function App() {
  const [date, setDate] = useState(moment())
  const [semester, setSemester] = useState(1)
  const [inputVisible, setInputVisible] = useState(true)
  const [weeks, setWeeks] = useState('')
  const [selectedElements, setSelectedElements] = useState([])
  const [info, setInfo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const elementsWithWeekAndDay = selectedElements.map((subject) => ({
        subject,
        week: weeks,
        day: date.day(),
      }))

      const data = await fetchSyllabiData(elementsWithWeekAndDay)
      setInfo(data)
    }
    fetchData()
  }, [selectedElements, weeks, date])

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
    if (weeks <= 0 || weeks > 20 || isNaN(weeks) || !Number.isInteger(+weeks)) {
      alert('Please enter a valid week number. (1-20)')
      return
    }
    setInputVisible(false)
  }

  const resetHandler = () => {
    setDate(null)
    setSemester(null)
  }

  const cancelHandler = () => {
    setDate(null)
    setSemester(null)
    setWeeks(null)
    setInputVisible(false)
  }

  const weekHandler = (e) => {
    e.preventDefault()
    setWeeks(e.target.value)
  }

  const inputBoxHandler = () => {
    setInputVisible((prevInputVisible) => {
      if (prevInputVisible) {
        setDate(null)
        setSemester(null)
        setWeeks(null)
      }
      return !prevInputVisible
    })
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
        setInfo={setInfo}
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
