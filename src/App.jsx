import React from 'react'
import Semester from './components/Semester'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Semester number={1}/>
      <Semester number={2}/>
    </div>
  )
}
