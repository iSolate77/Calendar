import React from 'react'
import Week from './Week'

export default function Semester(props) {

  const renderWeeks = () => {
    let weeks = []
    for (let i = 0; i < props.weeks; i++) {
      weeks.push(
        <div key={i} className='min-w-full'>
          <Week number={i + 1} date={props.date} selectedElements={props.selectedElements} info={props.info}/>
        </div>
      )
    }
    return weeks;
  }

  return (
    <div className='overflow-x-auto'>
      <div className='text-center text-2xl font-bold min-w-full'>Semester {props.number}</div>
      {renderWeeks()}
    </div>
  )
}
