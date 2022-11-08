import React from 'react'

const Slides = ({Slides,setCount,count,counts,arrayoftitle,arrayoftext}) => {
  
  return (
    <div className='App'>
    <div className='butt'>

      <button onClick={()=>setCount(count+1)} disabled={count>=4}>text</button>
      <button onClick={()=>setCount(count-1)} disabled={count<=0}>previous</button>
      <button onClick={()=>setCount(counts)} disabled={count<=0}>reset</button>
      
    </div>

      <div className='para'>
        <h1> {arrayoftitle[count]}</h1>
      </div>

      <div className='para1'>
        <h4>{arrayoftext[count]}</h4>
      </div>


    
    </div>
    
    
  )
}

export default Slides