import React, { useState } from 'react';

const Tour = ({ id,image,info,price,name,removeTour }) => {
  const [readmore,setReadmore] = useState(false)
  return <div className='single-tour'>
    <img src={image} />
    <footer >
      <div className='tour-info'>
        <h4 >{name}</h4>
        <h4 className='tour-price'>{price}</h4>
      </div>
    <p>{readmore? info:info.substring(0,190) }
    <button onClick={()=>setReadmore(!readmore)}>{readmore?'Read Less ': 'Read More'}</button></p> 
      
      <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
    </footer>

  </div>;
};

export default Tour;
