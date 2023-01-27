import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <div className='container'>
      <h3 >Question and Answer about Login</h3>
      <div>
      {data.map((que)=>{
        return  <SingleQuestion key={que.id} {...que}/>
      })}
     
    </div>
     
    </div>
    
  </main>;
}

export default App;
