import React from 'react'

const Box = (props) => {
  if (!props.data) {
    return null
  }
  return (
    <div className='w-15 h-auto text-center border border-gray-100 p-5 flex flex-col'>
      <div className='content'>{props.data.content}</div>
    </div>
  )
}

export default Box
