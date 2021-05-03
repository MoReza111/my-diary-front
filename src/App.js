import {useEffect} from 'react'

import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

function App() {
  useEffect(() => {
    M.AutoInit() // Init Materialize JS
  })

  return (
    <div className="App">

    </div>
  )
}

export default App
