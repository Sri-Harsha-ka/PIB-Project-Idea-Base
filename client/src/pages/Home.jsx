import React from 'react'
import Project from '../components/Project'
import { useEffect, useState } from 'react'
import { useApp } from '../Context/AppContext'

const Home = () => {

  const { prj, setPrj, loadPrj } = useApp()

  return (
    <div className='px-32 py-20 grid grid-cols-4 gap-y-10 gap-x-5'>
      {
          prj.map( (p) => {
            return <Project key={p._id} Name={p.Name} Domain={p.Domain} Categorie={p.Categorie} Rating={p.Rating} Description={p.Description} Relevance={p.Relevance}/>
          } )
      }
    </div>
  )
}

export default Home
