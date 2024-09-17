import React, { useState } from 'react'
import Keyboard from './Keyboard'
import Display from './Display'


const Calculator = () => {
    const[data, setData]= useState(0)
    // function to handle the User Input
    function handleClick(e){
        console.log(e.target.value)
        let curVal=e.target.value
        // Updating the Display Based on User Input
        if(data==" "){
            setData(curVal)

        }
        else{
            setData(prev=>prev+""+curVal)
        }
        // Calculating the results 
        if(curVal==="="){
            let result = eval(data)
            setData(result)
        }
        else if(curVal=="AC"){
            setData(0)
        }
        else if(curVal=="DEL"){
            let sVal = data
            if(sVal.length > 1){
                setData(sVal.slice(0,sVal.length-1))
            }
            else{
                setData(0)
            }
        }
    } 


  return (
    <div className='container' >
        <div className="card my-3 bg-light mx-auto border-light" style={{width:"450px",borderRadius:"20px"}}>
        <Display data={data} />
        <div className="card-body bg-grey text-dark" style={{borderRadius:"20px"}}>
        <Keyboard  onClick={handleClick}/>
        </div>
        </div>
      
      
    </div>
  )
}

export default Calculator
