import { Provider } from 'react-redux'
import { Fragment } from 'react'
import {ToastContainer} from 'react-toastify'
import './App.css'

import NavBar from './components/layout/NavBar'
import AddBtn from './components/layout/AddBtn'

import Diaries from './components/diaries/Diaries'
import AddDiaryModal from './components/diaries/AddDiaryModal'
import DiaryModal from './components/diaries/DiaryModal'

import store from './store'

const App = ()=> {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />
        <div className="container">
          <AddDiaryModal />
          <DiaryModal />
          <Diaries />
          <AddBtn />
        </div>
        <ToastContainer rtl={true} />
      </Fragment>
    </Provider>
  )
}

export default App
