import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count,setCount] = useState(0);
  const [text,setText] = useState([]);


  const handleSubmit=(e)=>{
   e.preventDefault();
  let amount = parseInt(count)
   if(count<=0){
    amount = 1;
   }
    else if(count>= data.length-1){
      amount = data.length
    }
setText(data.slice(0,amount))
  }

  

  return (
  <section  className='section-center'>
    <h3>Let's generate text</h3>
    <form action='submit' onSubmit={handleSubmit}>
      <label for="amount">
        Paragraphs:
      </label>
      <input type='number' value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button type="submit" className='btn'>generate</button>
    </form>
   
    <div className='result'>
      {text.map((para)=>{
        return <p className='result'>{para}</p>
      })}
     
    </div>
  </section>
    )
}

export default App;
