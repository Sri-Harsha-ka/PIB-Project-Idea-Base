import React from 'react'

const Features = () => {
    return (
        <div className='bg-[#3C3D37] text-[#ECDFCC] w-[26vw] min-h-[8vw] px-10 py-5 rounded-lg cursor-pointer shadow-[#242723] hover:shadow-2xl transition-all'>
            <div className=''>
                <p>FName</p>
            </div>
            <div className='px-5 py-3'>
                <p>
                    FDescription
                </p>
                <div className='flex justify-center text-center pt-5 text-[#ECDFCC40]'>
                    <span>Click To Open</span>
                </div>
            </div>
        </div>
    )
}

export default Features
