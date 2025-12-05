import React from 'react'
import Projects from '../components/Projects'
import { useEffect, useState } from 'react'
import { useApp } from '../Context/AppContext'

const Home = () => {

  const { prj, setPrj, loadPrj } = useApp()

  useEffect(() => {
    loadPrj();
  }, [])

  return (
    <div className='px-32 py-20 grid grid-cols-4 gap-y-10 gap-x-5'>
      {
        prj.map((p) => {
          return <Projects key={p._id} id={p._id} Name={p.Name} Domain={p.Domain} Categorie={p.Categorie} Rating={p.Rating} Description={p.Description} Relevance={p.Relevance} />
        })
      }
    </div>
  )
}

export default Home
