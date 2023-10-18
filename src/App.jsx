import { useState, useEffect } from 'react'
import './index.css'
import NavBar from '../Modules/navBar'
import Weather from '../Modules/weather'

function App() {

  return (
    <div className='filler'>
      <Weather/>
    </div>
  )
}

export default App
