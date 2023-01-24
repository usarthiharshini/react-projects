import React, { useState } from 'react';

const List = ({people}) => {
 
  return (
    <>
    {people.map((person)=>{
     return  <div className='person'><img src={person.image} />
     <div>
      <h4>{person.name}</h4>
      <p>{person.age} years</p></div></div>
    })}
      
    </>
  );
};

export default List;
