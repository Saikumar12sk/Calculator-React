import React from 'react'

const Display = (props) => {
  return (
    <>
      <h1 className='p-1 border border-dark  text-end m-3 bg-light' 
      style={{borderRadius:"20px"}}>
        {props.data}</h1>
    </>
  )
}

export default Display
