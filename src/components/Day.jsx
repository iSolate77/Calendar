import React from 'react'
import Box from './Box'
import moment from 'moment'

export default function Day(props) {
  let date = moment(props.date).format('DD MMM')
  let dayName = moment(props.date).format('dddd')
  const dayData = props.info?.find((item) => {
    return (
      item.week === props.weekNumber &&
      item.day === props.dayNumber &&
      props.selectedElements.includes(item.element)
    )
  })

  return (
    <>
      <div className='text-left self-center w-full'>
        <div className='text-center border-y-2 border-x min-w-16'>
          <div>{date}</div>
          <div>{dayName}</div>
        </div>
        <div>
          <Box
            data={dayData}
            info={props.info}
            selectedElements={props.selectedElements}
          />
        </div>
      </div>
    </>
  )
}
