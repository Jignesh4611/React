import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("submited")
  } 
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>  
        <input className='px-4 py-3 text-xl m-5'  type="text" placeholder='Enter Your name '/>
        <button className='px-4 py-3 m-5 text-xl font-semibold bg-emerald-500 rounded '> Submit</button>
      </form>
    </div>
  )
}

export default App
 