import React, { useState } from 'react'

const UseState = () => {
  const[num,setNum] =  useState(10)
   const changeNum = () =>{
       
      setNum(num => num+1)
   }
   
  return (
    <div>
      <h1>value of num is {num}</h1>
      <button className='bg-blue-300' onClick={changeNum}>Click here</button>
    </div>
  )
}

export default UseState


