import React from 'react'

export default function Box(props) {
  if (!props.data) {
    return (
      <div className='w-15 text-center border border-gray-100 p-5 flex-1 flex items-center justify-center'>
        <div className='h-full w-full'></div>
      </div>
    )
  }

  return (
    <div className='w-15 text-center border border-gray-100 p-5 flex-1 flex items-center justify-center'>
      <div className='h-full w-full'>{props.data}</div>
    </div>
  )
}
