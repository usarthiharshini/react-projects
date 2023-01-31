import React, { useState, useEffect } from 'react'
//import rgbToHex from './utils'




const SingleColor = ({weight,rgb,index,hex}) => {


 const [alert,setAlert] = useState(false)
  const hexValue= '#'+hex;
  
  

  useEffect(()=>{
   let timeout = setTimeout(()=>{
   setAlert(false)
   },3000)
   return ()=>clearTimeout(timeout)
  } ,[alert])
  return <article className={`color ${index>10 && 'color-light' }`} style={{backgroundColor:hexValue}}
   onClick={(e)=>{setAlert(true)
   navigator.clipboard.writeText(hexValue)}} key={index}>
    <p className='percent-value' >{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    <p className='alert'>{alert ? 'copied':''}</p>
  </article>
}

export default SingleColor
