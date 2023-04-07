import React from 'react'
import Box from './Box'

export default function Day(props) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
  const currentDate = props.date
    .clone()
    .add(props.number - 1 + (props.week - 1) * 7, 'days')
  const formattedDate = currentDate.format('DD MMM')

  const dayData = props.info?.find((item) => {
    return (
      item.day === props.number && props.selectedElements.includes(item.element)
    )
  })

  return (
    <>
      <div className='text-left self-center w-full'>
        <div className='text-center border-y-2 border-x min-w-16'>
          <div>{formattedDate}</div>
          <div>{days[props.number - 1]}</div>
        </div>
        <div>
          <Box data={dayData} info={props.info} selectedElements={props.selectedElements} />
        </div>
      </div>
    </>
  )
}
