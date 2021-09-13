import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Body from './components/Body'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Body />
    </Router>
  )
}

export default App