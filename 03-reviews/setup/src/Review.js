import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {  name, job, text, image } = people[index];
  console.log(people);


const prev = ()=>{
  if(index === 0){
    setIndex(people.length-1);
  }
  else setIndex(index-1)
}

const next = ()=>{
  if(index === people.length-1){
    setIndex(0);
  }
  else setIndex(index+1)
}

const random =()=>{
  let rand = Math.floor(Math.random()*people.length)
  console.log(rand);
  setIndex(rand)
}

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt="" className='person-img' />
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>
      {name}
    </h4>
    <p className='job'>
      {job}
    </p>

    <p className='info'>{text}</p>
    
    <div className='btn-grp'>
      <button className='prev-btn'  onClick={prev}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={next}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={random}>
        Surprise Me
      </button>
  </article>;
};

export default Review;
