import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import { useApp } from '../Context/AppContext'
import Features from '../components/Features'
import FeatureAdd from '../components/FeatureAdd'
import DeletePrj from '../components/DeletePrj'
import UpdatePrj from '../components/UpdatePrj'

const Project = () => {

    const prjId = useParams().prjId
    const { loadPrjOne, loaded, fet, loadFeature, delPrj } = useApp()
    const [del, setDel] = useState("notActive");
    const [upD, setUpD] = useState("notActive");

    useEffect(() => {
        loadPrjOne(prjId)
        loadFeature(prjId);
    }, [])

    const onDelPrj = (e) => {
        e.preventDefault();
        delPrj(prjId)
    }

    return (
        <>
            <div className='z-40 ' /> 
            {del === "Active" && <DeletePrj setDel={setDel} onDelPrj={onDelPrj} />}
            {upD === "Active" && <UpdatePrj prjId={prjId} setUpD = {setUpD} />}
            <div className={`bg-[#1E201E] px-10 py-10 min-h-screen ${del === 'Active' || upD==='Active' ? "blur-lg" : ""}`}>


                <div className='head '>

                    <div className='flex justify-between'>
                        <p className='text-6xl font-mono tracking-wider text-[#ECDFCC]'>
                            {loaded.Name}
                        </p>
                        <div>
                            <div className='flex gap-5'>
                                <div onClick={() => setUpD("Active")} className='text-lg bg-emerald-600 px-4 py-2 rounded-xl transition-all cursor-pointer'>
                                    edit
                                </div>
                                <div onClick={() => setDel("Active")} className='text-lg bg-red-400 px-4 py-2 rounded-xl transition-all cursor-pointer'>
                                    delete
                                </div>
                            </div>
                        </div>
                    </div>

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

                <div className='features min-h-96'>
                    <div className='px-10 py-8 grid grid-cols-3 gap-y-10 gap-x-5'>
                        {
                            fet.map((f) => {
                                return <Features key={f._id} fetId={f._id} prjId={prjId} name={f.FName} des={f.FDescription} />
                            })
                        }
                        <FeatureAdd prjId={prjId} />
                    </div>
                </div>

                 <div className='hr'>
                    <hr className='mt-6 border-[#697565]' />
                </div>

                <div>
                    <p>{loaded.Description}</p>
                </div>


            </div>
        </>
    )
}

export default Project
