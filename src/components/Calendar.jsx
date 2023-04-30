import React from 'react'
import Semester from './Semester'
import InputBox from './InputBox'

export default function Calendar(props) {
  const {
    inputVisible,
    date,
    semester,
    weeks,
    selectedElements,
    info,
    handlers,
  } = props

  return (
    <>
      {inputVisible && (
        <InputBox
          date={date}
          semester={semester}
          weeks={weeks}
          handlers={handlers}
        />
      )}
      {!inputVisible && date && semester && (
        <Semester
          number={semester}
          date={date}
          weeks={weeks}
          selectedElements={selectedElements}
          info={info}
          setInfo={props.setInfo}
        />
      )}
    </>
  )
}
