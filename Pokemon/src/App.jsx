import { useState } from 'react'
import Customroutes from './routes/Customroutes';
import './App.css'
import {Link} from 'react-router-dom';
function App() {
  

  return (
    <div className="outer-pokedex">
      <h1 id="heading"><Link to="/">Pokemon</Link></h1>
      <Customroutes />    
    </div>
  )
  
}

export default App
