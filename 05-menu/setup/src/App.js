import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set(items.map(item=>item.category))]
console.log(allCategories);

function App() {

  const [menu,setMenu] = useState(items)
const [category,setCategory] = useState('All Items')

  const filter =(category)=>{
    if(category==='all'){
      setMenu(items);
      setCategory('All Items')
      return;
    }
    const newItems=  items.filter((item)=>{
     return item.category===category
    })
    setMenu(newItems)
    setCategory(category)

  }

  return <main>
    <div className='menu'>
         
      <h2 className='title' >{category}</h2>
      <div className='underline'>
        
      </div>
      <Categories allCategories={allCategories} filter={filter}/>
      <Menu items={menu}/>
    </div>
  </main>;
}

export default App;
