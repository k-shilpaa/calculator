import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className='calcuatormain'>
   
    <form className='calculator'>
      <div>
        <input type='text' value={value} readOnly/>
      </div>
      <div className='buttons'>
        <button type="button" className='clear-btn spantwo' value="AC" onClick={(e=>setValue(""))}>AC</button> 
          <button type="button"  onClick={() => setValue(value + "%")}>%</button>
          <button type="button"  onClick={() => setValue(value + "/")}>/</button>
    
       
        <button type="button" value="7" onClick={(e=>setValue(value+e.target.value))}>7</button>
         <button type="button" value="8" onClick={(e=>setValue(value+e.target.value))}>8</button>
          <button type="button" value="9" onClick={(e=>setValue(value+e.target.value))}>9</button>
          <button type="button"  onClick={() => setValue(value + "*")}>*</button>
     
        <button type="button" value="4" onClick={(e=>setValue(value+e.target.value))}>4</button>
         <button type="button" value="5" onClick={(e=>setValue(value+e.target.value))}>5</button>
          <button type="button" value="6" onClick={(e=>setValue(value+e.target.value))}>6</button>
          <button type="button"  onClick={() => setValue(value + "-")}>-</button>
      
        <button type="button" value="1" onClick={(e=>setValue(value+e.target.value))}>1</button>
         <button type="button" value="2" onClick={(e=>setValue(value+e.target.value))}>2</button>
          <button type="button" value="3" onClick={(e=>setValue(value+e.target.value))}>3</button>
          <button type="button" onClick={() => setValue(value + "+")}>+</button>
      
        <button type="button" value="0" onClick={(e)=>setValue(value+e.target.value)}>0</button>
         <button type="button" value="." onClick={(e)=>setValue(value+e.target.value)}>.</button>
          <button type="button" value="c" onClick={(e)=>setValue(value.slice(0,-1))}>c</button>
          <button type="button" className='equals equals-btn' value="=" onClick={()=>setValue(eval(value))}>=</button>
      </div>

    </form>
    </div>
  )
}

export default App
