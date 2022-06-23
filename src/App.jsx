import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import phrases from './phrases.json'
import './App.css'

function App() {
  

  return (
    <div>
      <QuoteBox phrases={phrases}/>
    </div>
  )
}

export default App
