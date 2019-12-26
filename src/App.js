import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'

import Header from './Header'
import Home from './Home'
import Genres from './Genres'
import NewGenre from './NewGenre'
import UpdateGenre from './UpdateGenre'

function App() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    axios
      .get('/api')
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={ Home } />
        <Route path='/genres' exact component={ Genres } />
        <Route path='/genres/new' exact component={ NewGenre } />
        <Route path='/genres/:id' component={ UpdateGenre } />
        <pre>{ JSON.stringify(data) }</pre>
      </div>
    </Router>
  )
}

export default App
