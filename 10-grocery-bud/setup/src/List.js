import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,deleteItem,handleEdit}) => {
 /*  //console.log(items);

const handleEdit=()=>{

}
/* const handleDelete=(key)=>{
 const newItems= items.filter((thing)=>{
    return thing.id != key
  })
  console.log(newItems);
} */
 
  return <article className='grocery-container'>{
    items.map((item)=>{
      return <div className='grocery-item' key={item.id} >
     
        <p className='title'>{item.title}</p>
        <div className='btn-container'>
        <FaEdit className='edit-btn'  onClick={()=>handleEdit(item.id)} />
        <FaTrash className='delete-btn' onClick={()=>deleteItem(item.id)}/>
        </div >
        
      </div>
    })}</article>
}

export default List
