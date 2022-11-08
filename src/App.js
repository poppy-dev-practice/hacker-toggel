import React from 'react'
import "./index"
import { useState } from 'react'
import Slides from './components/Slides'


function App({ slides }) {

  let arrayoftitle = slides.map((el)=>el.title)
  let arrayoftext = slides.map((el)=>el.text)
  let counts=0
  const [count,setCount] = useState(counts)



  return (

    <div className>
      <Slides slides={slides} counts={counts} count={count} setCount={setCount} arrayoftitle={arrayoftitle} arrayoftext={arrayoftext} ></Slides>
    </div>
  )
}

export default App
