import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people,setPeople] = useState(data);
  const [index,setIndex] = useState(0);
const {image,name,title,quote} =people[index];



const goprev=()=>{
  if(index===0){
    setIndex(people.length-1);
 }
   else   setIndex(index-1)
}
const gonext =()=>{
  if(index===people.length-1){
    setIndex(0);
  }
    else  setIndex(index+1)
}

useEffect(()=>{
 let interval= setInterval(()=>{
  gonext();
  console.log(index+" index"); 

 },2000)
 
 return ()=>{

   clearInterval(interval)
 }
},[index])

  return <section className='section'>
    <h2 className='title'>
      <span>/</span>Reviews
    </h2>

    <div className='section-center'>
      
      <article>
      <img src={image} alt="" className='person-img '/>
        <h4>{name}</h4>
        <div className='title'>
          {title}
        </div>
        <p className='text'>{quote}</p>
        <FaQuoteRight className='icon'/>
        <FiChevronLeft onClick={goprev} className='prev'/>
        <FiChevronRight className='next' onClick={gonext} />
      </article>
    </div>
  </section >;
}

export default App;
