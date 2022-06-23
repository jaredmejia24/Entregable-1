import { useState } from 'react'
import Phrase from './components/Phrase'
import phrases from './phrases.json'
import './App.css'

function App() {
  

  return (
    <div>
      <Phrase phrases={phrases}/>
    </div>
  )
}

export default App
