import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
const [showInfo,setShowInfo] = useState(false);

  return <div className='question'>
    <header>
    <h4>{title}</h4>
    <button className='btn' onClick={()=>setShowInfo(!showInfo)}> {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
  
    </header>
    <p>{showInfo && info}</p>
  </div>;
};

export default Question;
