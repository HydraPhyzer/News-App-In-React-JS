import React from 'react'
import Search from './Components/Search'
import Pagination from './Components/Pagination'
import News from './Components/News'
import { Context } from './Context'
import './App.css'

const App = () => {
  return (
    <Context>
      <div className='App'>
        <div className="App-Content">
          <Search />
          <Pagination/>
          <News/>
        </div>
      </div>
    </Context>
  )
}

export default App