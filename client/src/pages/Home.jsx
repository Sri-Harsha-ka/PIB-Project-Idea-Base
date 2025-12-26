import React from 'react'
import Projects from '../components/Projects'
import { useEffect, useState } from 'react'
import { useApp } from '../Context/AppContext'
import Loading from '../components/Loading'

const Home = () => {

	const { prj, setPrj, loadPrj, loadingPrj } = useApp()

	useEffect(() => {
		loadPrj();
	}, [])

	if (loadingPrj) return (<div className='grid place-items-center pt-44'>
		<Loading />
	</div>)

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
