import React from 'react'
import Day from './Day'

export default function Week(props) {

  const renderDays = () => {
    let days = []
    for (let i = 0; i < 5; i++) {
      days.push(
        <Day number={i + 1} key={i} />
      )
    }
    return days;
  }

  return (
    <div className='flex justify-between'>
      <div className='w-15 text-left self-center text-lg font-semibold'>Week {props.number}</div>
      <div className='flex flex-grow p-2'>{renderDays()}</div>
    </div>
  )
}
