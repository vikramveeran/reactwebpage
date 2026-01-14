import React, { useState } from 'react'

const UseState = () => {
  const[num,setNum] =  useState(10)
   const Increase = () =>{
       
      setNum(prev => (prev+1))
       setNum(prev => (prev+1))
        setNum(prev => (prev+1))
   }
   const Decrease = () =>{
     setNum(num-1)
   }
   
  return (
    <div className='mr-3'>
      <h1>value of num is {num}</h1>
      <button className='bg-red-300 ' onClick={Increase}>Increase</button>
      {/* <button className='bg-blue-300 relative -right-2.5' onClick={Decrease}>DE</button> */}
    </div>
  )
}

export default UseState


