import React from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className='btn btn-outline-secondary fw-bold text-dark w-50 border border-dark m-1 ' 
       style={{height:'50px',borderRadius:"20px"}} value={props.value}>{props.value}</button>
    </>
  )
}

export default Button
