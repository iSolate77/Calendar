import React from 'react'
import Semester from './Semester'

export default function Calendar(props) {
  const {
    inputVisible,
    date,
    semester,
    weeks,
    selectedElements,
    info,
    handlers,
  } = props

  return (
    <>
      {inputVisible && (
        <form onSubmit={handlers.submitHandler}>
          <div className='max-w-md mx-auto my-8 bg-white p-6 rounded-md shadow-md'>
            <label
              htmlFor='semester'
              className='block text-gray-700 font-bold mt-4 mb-2'
            >
              Semester:
            </label>
            <select
              id='semester'
              name='semester'
              value={semester}
              onChange={handlers.semesterHandler}
              className='border border-gray-400 p-2 rounded-md w-full'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>
            <label
              htmlFor='week'
              className='block text-gray-700 font-bold my-2'
            >
              Number of weeks:
            </label>
            <input
              type='number'
              id='weeks'
              name='weeks'
              value={weeks}
              min={1}
              onChange={handlers.weekHandler}
              className='border border-gray-400 p-2 rounded-md w-full'
            />
            <label
              htmlFor='date'
              className='block text-gray-700 font-bold my-2'
            >
              Starting date:
            </label>
            <input
              type='date'
              id='date'
              name='date'
              defaultValue={date.format('YYYY-MM-DD')}
              onBlur={handlers.dateHandler}
              className='border border-gray-400 p-2 rounded-md w-full'
            />
            <div className='mt-4 flex justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                type='submit'
              >
                Submit
              </button>
              <button
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'
                type='button'
                onClick={handlers.resetHandler}
              >
                Reset
              </button>
              <button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                type='button'
                onClick={handlers.cancelHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
      {!inputVisible && date && semester && (
        <Semester
          number={semester}
          date={date}
          weeks={weeks}
          selectedElements={selectedElements}
          info={info}
          setInfo={props.setInfo}
        />
      )}
    </>
  )
}
