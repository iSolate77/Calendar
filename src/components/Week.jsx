import React from 'react'
import Day from './Day'

export default function Week(props) {
  const daysArray = [...Array(5).keys()]

  return (
    <div className='flex justify-between'>
      <div className='flex-shrink-0 w-20 text-left self-center text-lg font-semibold'>
        Week {props.weekNumber}
        <br />
        <span className='text-sm'>Description</span>
      </div>
      <div className='flex flex-grow p-2'>
        {daysArray.map((_, index) => (
          <Day
            key={index}
            dayNumber={index}
            weekNumber={props.weekNumber}
            date={props.date.clone().add(index, 'days')}
            selectedElements={props.selectedElements}
            info={props.info}
            setInfo={props.setInfo}
          />
        ))}
      </div>
    </div>
  )
}
