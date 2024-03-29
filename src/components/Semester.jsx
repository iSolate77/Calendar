import React from 'react'
import Week from './Week'

export default function Semester(props) {

  /* const renderWeeks = () => { */
  /*   let weeks = [] */
  /*   for (let i = 0; i < props.weeks; i++) { */
  /*     weeks.push( */
  /*       <div key={i} className='min-w-full'> */
  /*         <Week number={i + 1} date={props.date} selectedElements={props.selectedElements} info={props.info}/> */
  /*       </div> */
  /*     ) */
  /*   } */
  /*   return weeks; */
  /* } */
  /**/
  /* return ( */
  /*   <div className='overflow-x-auto'> */
  /*     <div className='text-center text-2xl font-bold min-w-full'>Semester {props.number}</div> */
  /*     {renderWeeks()} */
  /*   </div> */
  /* ) */
  const weeksArray = [...Array(parseInt(props.weeks)).keys()]

  return (
      <div className='overflow-x-auto'>
        <h1 className='text-center text-2xl font-bold min-w-full'>Semester {props.number}</h1>
        {weeksArray.map((_, index) => (
          <Week
            key={index}
            weekNumber={index + 1}
            date={props.date.clone().add(index, 'weeks')}
            selectedElements={props.selectedElements}
            info={props.info}
            setInfo={props.setInfo}
          />
        ))}
      </div>
  )
}
