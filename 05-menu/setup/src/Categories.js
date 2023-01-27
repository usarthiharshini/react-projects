import React from 'react';

const Categories = ({filter,allCategories}) => {
  return <div className='btn-container'>
           {allCategories.map((category,index)=>{
            return <button className='filter-btn' key={index} onClick={()=>filter(category)} >{category}</button>
           })}
  </div>;
};

export default Categories;
