import React from 'react'
import Box from './Box'
import moment from 'moment'
import { fetchSyllabiData } from '../services/firebase'

export default function Day(props) {
  let date = moment(props.date).format('DD MMM')
  let dayName = moment(props.date).format('dddd')

  const dayData = async () => {
    const data = await fetchSyllabiData([
      {
        subject: props.selectedElements, // assuming selectedElements is the subject name
        week: props.weekNumber,
        day: props.dayNumber,
      },
    ])
    return data
  }

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
