import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'

const groceryStore=JSON.parse(localStorage.getItem('grocery'))|| [];
console.log(groceryStore);
function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(groceryStore);
  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [editing,isEditing] = useState(false);
  const [key,setKey] = useState('')
 // const [inputRef, setInputRef] = useState(null);
 const inputRef = useRef(null)


const handleSubmit=(e)=>{
  e.preventDefault();
  const newItem = {
    id: new Date().getTime().toString(),
    title: name
  }
  setList([...list,newItem])
  setName('')
  setAlert({
    show:true,
    msg:'Product added successfully',
    type:'success'
  });
  
}

const deleteItem=(key)=>{
  const newItems= list.filter((thing)=>{
    return thing.id !== key
  })
  console.log(newItems);
 setList(newItems);
 setAlert({
  show:true,
  msg: 'Item deleted successfully',
  type:'danger'
 })
}

const setEdit=(key)=>{
  setKey(key);
   isEditing(true);
   setAlert({
    show:true,
    msg: 'editing',
    type:'danger'
   })
   const itemEdited= list.find((item)=>item.id===key);
   setName(itemEdited.title)
  inputRef.current.focus()
   
   
}

const handleEdit=(e)=>{
  e.preventDefault();
 
  //inputRef.current=null
  const itemEdited= list.find((item)=>item.id===key).title = name
  console.log(itemEdited);
  setAlert({
    show:true,
    msg: 'Item edited successfully',
    type:'success'
   })
  isEditing(false)
  setName('')
}

useEffect(()=>{
 let timer=setTimeout(()=>{
  setAlert({
    show:false
  })
 },3000)
 return ()=> clearTimeout(timer)
},[alert])

useEffect(()=>{
  localStorage.setItem('grocery',JSON.stringify(list))
},[list])

  return <section className='section-center'>
  {alert.show &&  <Alert alert={alert}/>}
    <h3>Grocery Bud</h3>
    
    <form  className='form-control'>
         <input type="text" className='grocery' value={name} placeholder='e.g  eggs'
         ref={inputRef}
         onChange={(e)=>setName(e.target.value)}/>
         <button type="submit" className='submit-btn'
         onClick={editing?handleEdit:handleSubmit}>
          {editing?'edit':'submit'}
         </button>
      
    </form>
    <List items={list} deleteItem={deleteItem} handleEdit={setEdit}/>
    <button className='clear-btn' onClick={()=>{setList([]);  setAlert({
    show:true,
    msg: 'All items deleted',
    type:'danger'
   }) }}>clear all</button>
  </section>
}

export default App
