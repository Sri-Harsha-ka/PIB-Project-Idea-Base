import React from 'react'

const Project = (p) => {
  return (
    <div className='cursor-pointer'>
      <div className='px-8 py-6 bg-[#3C3D37] w-96 h-56 rounded-md hover:shadow-2xl shadow-[#242723] transition-all'>
        <div className='flex justify-center text-center'>
          <p className='font-mono text-2xl'>{p.Name}</p>
        </div>
        <div className='flex justify-around items-center pt-8'>
            Domain: <span>{p.Domain}</span>
            Categoriey: <span>{p.Categorie}</span>
        </div>
        <div className='flex justify-around items-center pt-4'>
            Rating: <span>{p.Rating}</span>
            Relevance: <span>{p.Relevance}</span>
        </div>
        <div className='flex justify-center text-center pt-5 text-[#ECDFCC40]'>
        <span>Click To Open</span>
        </div>
      </div>
    </div>
  )
}

export default Project
