import React from 'react'

export default function Box(props) {
  const elements = props.selectedElements.map((element, index) => (
    <div key={index} className='border border-gray-100 p-2'>{element}</div>
    ))
  return (
    <div className='w-15 h-32 text-center border border-gray-100 p-5'>
      {elements}
    </div>
  )
}
