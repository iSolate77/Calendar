import React from 'react'
import Semester from './components/Semester'
import Navbar from './components/Navbar'

export default function App() {
  const [date, setDate] = React.useState('')
  const [semester, setSemester] = React.useState(1)
  const [inputVisible, setInputVisible] = React.useState(true)
  const [weeks, setWeeks] = React.useState('')


  const dateHandler = (e) => {
    e.preventDefault()
    setDate(e.target.value)
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

  const inputBoxHndler = () => {
    setInputVisible(!inputVisible)
  }

  return (
    <div className='h-screen'>
      <Navbar>
        <button onClick={inputBoxHndler} className='w-full text-start'>
          Toggle input
        </button>
      </Navbar>
      {inputVisible && (
        <form onSubmit={submitHandler}>
          <div className="max-w-md mx-auto my-8 bg-white p-6 rounded-md shadow-md">
            <label htmlFor="semester" className="block text-gray-700 font-bold mt-4 mb-2">
              Semester:
            </label>
            <select
              id="semester"
              name="semester"
              value={semester}
              onChange={semesterHandler}
              className="border border-gray-400 p-2 rounded-md w-full"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <label htmlFor="week" className="block text-gray-700 font-bold mb-2">
              Number of weeks:
            </label>
            <input
              type="number"
              id="weeks"
              name="weeks"
              value={weeks}
              onChange={weekHandler}
              className="border border-gray-400 p-2 rounded-md w-full"
            />
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Starting date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={dateHandler}
              className="border border-gray-400 p-2 rounded-md w-full"
            />
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                type="button"
                onClick={resetHandler}
              >
                Reset
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={cancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )
      }
      {!inputVisible && date && semester && <Semester number={semester} date={date} weeks={weeks} />}
    </div >
  )
}
