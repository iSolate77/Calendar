import React from 'react'
import Week from './Week'

export default function Semester(props) {

  const renderWeeks = () => {
    let weeks = []
    for (let i = 0; i < 16; i++) {
      weeks.push(
        <div key={i}>
          <Week number={i + 1} />
        </div>
      )
    }
    return weeks;
  }

  return (
    <>
      <div className='text-center text-2xl font-bold'>Semester {props.number}</div>
      {renderWeeks()}
    </>
  )
}
