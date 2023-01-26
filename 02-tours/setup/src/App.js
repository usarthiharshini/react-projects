import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'http://localhost:3005/hotels'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([])

const removeTour =(id)=>{
  setTours(tours.filter((tour)=>tour.id!=id));
}

const fetchData = async ()=>{
  try {
    setLoading(true);
    const data = await fetch(url);
    const result = await data.json();
    setLoading(false);
   setTours(result);
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  fetchData();
},[])


  if(loading) {
    return <Loading/>
  }
  if(tours.length==0){
    return <main >
      <div className='title' >
       <h2>No More Tours</h2>
       <button onClick={()=>fetchData()} className='btn'>Refresh</button>
       </div>
    </main>
  }
  return <main>
    <h2 className='title'>Hotels</h2>
    <div className='underline'></div>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
