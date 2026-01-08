import React from 'react'
import { useApp } from '../Context/AppContext'
import { useState, useEffect, useCallback } from 'react'
import bg from '../images/image.png'

const Create = () => {

  const { view,ani , setAni, createPrj, prj, setPrj } = useApp()

  const animationClass = ani === false ? "animate-viewAniClose" : "animate-viewAniOpen"

  // In Form 
  // 1.Project Name
  // 2.Project Domain
  // 3.Categorie
  // 4.Rating
  // 5.Relevance
  // 6.Description

  const [form, setForm] = useState({
    Name: '',
    Domain: '',
    Rating: 0,
    Relevance: 0,
    Categorie: '',
    Description: ''
  })

  // Dude wtf is this shit ? igup i will COME BACK in future and understand you myself
  const onChange = (e) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await createPrj(form)

    setForm({
      Name: '',
      Domain: '',
      Rating: 0,
      Relevance: 0,
      Categorie: '',
      Description: ''
    })

    setAni(false)
  }


  return (
    <div className={`${animationClass} w-[50vw] h-[42vw] bg-[#33332f] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-linear rounded-lg bg-cover overflow-hidden z-90`} /* style={{ backgroundImage: `url(${bg})`, backgroundRepeat: `no-repeat` }} */>
      <div className='backdrop-blur-xl px-10 py-7'>
        <div className='flex justify-center text-center'>
          <p className='font-mono text-3xl'>Project Creation</p>
        </div>
        <form onSubmit={onSubmit} className='px-20 py-12 flex justify-center items-center flex-col'>
          <input type="text" name='Name' value={form.Name} onChange={onChange} placeholder='Enter the Project Name' className='outline-none border-b-2 w-96 px-7 py-2 text-xl font-semibold focus:border-b-[#697565]' />
          <div className='flex justify-center items-center gap-8 pt-8 flex-col'>
            <input type="text" name='Domain' value={form.Domain} onChange={onChange} placeholder='Enter the Domain' className='outline-none border-b-2 w-96 px-7 py-2 text-xl font-semibold focus:border-b-[#697565]' />
            <input type="text" name='Categorie' value={form.Categorie} onChange={onChange} placeholder='Enter the Categorie' className='outline-none border-b-2 w-96 px-7 py-2 text-xl font-semibold focus:border-b-[#697565]' />
          </div>
          <div className='flex justify-center items-center gap-8 pt-8'>
            <span className='font-semibold text-xl'>Difficulty Rating out of 10: </span>
            <input type="number" name='Rating' onChange={onChange} value={form.Rating} max={10} min={0} className='px-4 py-2 w-20 outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 border-[#697565]' />
          </div>
          <div className='flex justify-center items-center gap-8 pt-8'>
            <span className='font-semibold text-xl'>Relevance Level out of 10: </span>
            <input type="number" name='Relevance' onChange={onChange} value={form.Relevance} max={10} min={0} className='px-4 py-2 w-20 outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b-2 border-[#697565]' />
          </div>

          <div className='flex justify-center items-center gap-8 pt-8 pb-8' >
            <textarea name="Description" onChange={onChange} value={form.Description} id="" placeholder='Enter the Short note of the Project' className='w-96 h-44 resize-none outline-none focus:shadow-2xl rounded-2xl px-8 py-4 font-medium text-lg'></textarea>
          </div>

          <button type='submit' className='cursor-pointer bg-[#697565] px-8 py-3 rounded-2xl text-xl'>Create Project</button>
        </form>
      </div>
    </div>
  )
}

export default Create
