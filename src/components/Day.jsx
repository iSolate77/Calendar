import React, { useState, useEffect } from 'react'
import Box from './Box'
import moment from 'moment'
import { fetchSyllabiData } from '../services/firebase'

export default function Day(props) {
  let date = moment(props.date).format('DD MMM')
  let dayName = moment(props.date).format('dddd')

  const [content, setContent] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSyllabiData(
        props.selectedElements,
        props.weekNumber,
        props.dayNumber + 1
      )
      const nonEmptyData = data
        .filter((item) => item !== '' && item !== null)
        .join('\n')

      if (nonEmptyData) {
        setContent(nonEmptyData)
      } else {
        setContent(null)
      }
    }

    fetchData()
  }, [props.selectedElements, props.weekNumber, props.dayNumber])

  return (
    <>
      <div className='text-left self-center w-full flex flex-col h-full'>
        <div className='text-center border-y-2 border-x min-w-16'>
          <div>{date}</div>
          <div>{dayName}</div>
        </div>
        <div className='flex flex-grow'>
          <Box
            data={content}
            info={props.info}
            selectedElements={props.selectedElements}
          />
        </div>
      </div>
    </>
  )
}
