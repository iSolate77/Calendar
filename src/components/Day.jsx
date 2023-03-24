import React from 'react'
import Box from './Box'
import moment from 'moment'

export default function Day(props) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
  let date = moment(props.date).add(props.number - 1 + ((props.week - 1) * 7), 'days').format('DD MMM')
  return (
    <>
      <div className='w-15 text-left self-center w-full'>
        <div className='text-center border-y-2 border-x'>
          <div>
            {date}
          </div>
          <div>
            {days[props.number - 1]}
          </div>
        </div>
        <div>
          <Box selectedElements={props.selectedElements}/>
        </div>
      </div>
    </>
  )
}
