import React from 'react'


const Introdunction = () => {
 
  function expressingGratitude(){
     alert("Thank you")
  }
  
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen h-52 bg-gradient-to-r from-red-500 to-blue-500 ">
      <div className='border border-white rounded-lg flex flex-col items-center justify-center  p-8 bg-black/40 '>
            <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
        Hi, I’m Vikram, a 2nd-year ISE student
      </h1>

       <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-6">
          with a passion for problem-solving and coding
       </h3>

      <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mb-8">
        “First, solve the problem. Then, write the code.” <br />
        — John Johnson
      </p>

      <button onClick={expressingGratitude} className="px-6 py-3 bg-white text-indigo-600  font-semibold rounded-md shadow-md hover:bg-indigo-100 transition" >
        Click Me
      </button>
         </div>
    </div>
    )  
}

export default Introdunction
