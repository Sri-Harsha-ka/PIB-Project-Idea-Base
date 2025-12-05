import React from 'react'
import { useApp } from '../Context/AppContext'

const Features = ({name,des,prjId,fetId}) => {

    const { deleteFeature } = useApp()

    const onDelFet = async()=>{
        await deleteFeature(prjId,fetId)
    }
    return (
        <div className='bg-[#3C3D37] text-[#ECDFCC] w-[26vw] min-h-[8vw] px-10 py-5 rounded-lg cursor-pointer shadow-[#242723] hover:shadow-2xl transition-all'>
            <div className='flex justify-between items-center'>
                <p className='text-lg'>{name}</p>
                <div className='flex gap-5'>
                    <div className='text-lg text-emerald-600 hover:underline transition-all '>
                        edit
                    </div>
                    <div onClick={onDelFet} className='text-lg text-red-400 hover:underline transition-all '>
                        delete
                    </div>
                </div>
            </div>
            <div className='px-5 py-3'>
                <p>
                    {des}
                </p>
            </div>
        </div>
    )
}

export default Features
