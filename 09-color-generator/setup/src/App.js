import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('#8F00FF');
  const [list,setList] = useState([]);
  const [error,setError] = useState(false)

  const handleSubmit=(e)=>{

    try {
      e.preventDefault();
      const values = new Values(color).all(10);
      setList(values);
      //console.log(list);
    } catch (error) {
      setError(true)
      console.log(error);
    }
 
  }
  return <>
  <section className='container'>
    
        <h3>Color Generator</h3>
       <input type='text' placeholder='#8F00FF'  onChange={(e)=>setColor(e.target.value)}
       className={`${error && 'error'}`}/>
        <button type="submit" className='btn' value={color}
        onClick={handleSubmit}
       >
          generate</button>
    
    
  </section>
  <section className='colors'>
   { 
       list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index} hex={color.hex}/>
      })
   
   }
  </section></>
}

export default App
