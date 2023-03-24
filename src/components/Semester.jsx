import React from 'react'
import Week from './Week'

export default function Semester(props) {

  const renderWeeks = () => {
    let weeks = []
    for (let i = 0; i < props.weeks; i++) {
      weeks.push(
        <div key={i} className='inline-flex min-w-full'>
          <Week number={i + 1} date={props.date} selectedElements={props.selectedElements} />
        </div>
      )
    }
    return weeks;
  }

  return (
    <div className='overflow-x-auto'>
      <div className='text-center text-2xl font-bold'>Semester {props.number}</div>
      {renderWeeks()}
    </div>
  )
}
