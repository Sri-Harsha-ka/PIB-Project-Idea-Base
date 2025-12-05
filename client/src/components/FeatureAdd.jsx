import React, { useEffect } from 'react'
import { useApp } from '../Context/AppContext'
import { useState } from 'react'

const FeatureAdd = ({prjId}) => {

    const { createFeature } = useApp()

    const [defData, setDefData] = useState({
        FName: "Name",
        FDescription: "FDescription"
    })

    const creationFet = async (e) => {
        e.preventDefault()
        await createFeature(defData,prjId)
    }

    return (
        <div onClick={creationFet} className='border-sky-800 border-6 border-dashed bg-[#3B82F633] px-10 py-5 flex justify-center items-center w-[26vw] rounded-xl cursor-pointer hover:bg-[#3B82F64D] transition-all duration-500'>
            <div className='head '>
                <p className='text-6xl font-semibold  text-sky-700'>
                    + Add
                </p>
            </div>
        </div>
    )
}

export default FeatureAdd
