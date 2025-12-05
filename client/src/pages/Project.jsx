import React, { useEffect } from 'react'
import { data, useParams } from 'react-router-dom'
import { useApp } from '../Context/AppContext'
import Features from '../components/Features'
import FeatureAdd from '../components/FeatureAdd'

const Project = () => {

    const prjId = useParams().prjId
    const { loadPrjOne, loaded } = useApp()

    useEffect(() => {
        loadPrjOne(prjId);
        console.log();
        
    }, [])


    return (

        <div className='bg-[#1E201E] px-10 py-5'>

            <div className='head '>
                <p className='text-6xl font-mono tracking-wider text-[#ECDFCC]'>
                    {loaded.Name}
                </p>
                <div className='px-10 py-5'>
                    <div className='flex justify-between gap-10 w-[30%]'>
                        <div className='flex justify-evenly gap-4 items-center'>
                            <span className='text-xl font-bold'>Domain:</span> <span className='text-xl font-sans'>{loaded.Domain}</span>
                        </div>
                        <div className='flex justify-evenly gap-4'>
                            <span className='text-xl font-bold'>Categorie:</span> <span className='text-xl font-sans'>{loaded.Categorie}</span>
                        </div>
                    </div>
                    <div className='flex justify-between gap-10 w-[30%] pt-5'>
                        <div className='flex justify-evenly gap-4 items-center'>
                            <span className='text-xl font-bold'>Rating:</span> <span className='text-xl font-sans'>{loaded.Rating}/10</span>
                        </div>
                        <div className='flex justify-evenly gap-4'>
                            <span className='text-xl font-bold'>Relevance:</span> <span className='text-xl font-sans'>{loaded.Relevance}/10</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hr'>
                <hr className='mt-6 border-[#697565]' />
            </div>

            <div className='features'>
                <div className='px-10 py-8 grid grid-rows-4 grid-cols-3 gap-y-10 gap-x-5'>
                    <Features/>
                    <Features/>
                    <Features/>
                    <Features/>
                    <FeatureAdd />
                </div>
            </div>


        </div>
    )
}

export default Project
