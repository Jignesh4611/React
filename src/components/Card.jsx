import React from 'react'

const Card = (a) => {
  return (
  
  <div className="mr-3 ml-3 mb-2 bg-white text-black inline-block p-6 text-center rounded">
        <img className='  h-32 w-32 rounded-full mb-3' src={a.photo} />
        <h1>{a.username} </h1>
        <h4 className='text-blue-400'>{a.prof}</h4>
        <h2>{a.city},{a.age}</h2>
        <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Submit</button>
      
    </div>
  )
}

export default Card
