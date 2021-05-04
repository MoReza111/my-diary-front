import { Fragment } from 'react'
import './App.css'

import NavBar from './components/layout/NavBar'

import Diaries from './components/diaries/Diaries'

const App = ()=> {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Diaries />
      </div>
    </Fragment>
  )
}

export default App
