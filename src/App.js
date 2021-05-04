import { Fragment } from 'react'
import './App.css'

import NavBar from './components/layout/NavBar'
import AddBtn from './components/layout/AddBtn'

import Diaries from './components/diaries/Diaries'
import AddDiaryModal from './components/diaries/AddDiaryModal'
import DiaryModal from './components/diaries/DiaryModal'

const App = ()=> {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        {/* <AddDiaryModal /> */}
        <DiaryModal />
        <Diaries />
        <AddBtn />
      </div>
    </Fragment>
  )
}

export default App
