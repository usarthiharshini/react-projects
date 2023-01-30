import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'




function App() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true);
  const [value,setValue] = useState(0);

  const getData = async()=>{
    try {
      let dat = await fetch('http://localhost:3005/data');
      let res = await dat.json();
         setData(res);
         setLoading(false)
       //console.log(data);
    } catch (error) {
      console.log(error);
    }
    
   
  }
  
  useEffect(()=>{
    getData();
  },[]);

if(loading){
  return <h2>Loading...</h2>
}
const {company,title,dates,duties} = data[value];

  return <section className='section' >
    <div className='title'>
      <h2>Experience</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
      <div className='btn-container'>
        {data.map((job,index)=>{
          return <button className={`job-btn ${index===value && `active-btn`}`} onClick={()=>setValue(index)}>{job.company}</button>
        })}
      </div>
      <div className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <div className='job-date '>
          {dates}
        </div>
        <div >
          {duties.map((duty)=>{
            return <div className='job-desc ' >
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          })}
        </div>
      </div>

    </div>
   
  </section >
}

export default App
