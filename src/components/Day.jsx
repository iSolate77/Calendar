import React from 'react'
import Box from './Box'

export default function Day(props) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
  return (
    <>
      <div className='w-15 text-left self-center w-full'>
        <div className='text-center border-y-2 border-x'>
          {days[props.number - 1]}
        </div>
        <div>
          <Box />
        </div>
      </div>
    </>
  )
}
