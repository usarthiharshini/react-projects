import React from 'react'

const Alert = ({alert}) => {
 // console.log(alert);
  const {msg,type} = alert;
  return <article className='alert '>
   <div className={`alert-${type}`}>{msg}</div>
  </article>
}

export default Alert
