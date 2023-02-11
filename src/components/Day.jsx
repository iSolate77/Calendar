import React from 'react'
import Box from './Box'
import moment from 'moment'

export default function Day(props) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
  let date = moment().add(props.number - 1, 'days').format('DD MMM')
  return (
    <>
      <div className='w-15 text-left self-center w-full'>
        <div className='text-center border-y-2 border-x'>
          {date}
          {days[props.number - 1]}
        </div>
        <div>
          <Box />
        </div>
      </div>
    </>
  )
}
