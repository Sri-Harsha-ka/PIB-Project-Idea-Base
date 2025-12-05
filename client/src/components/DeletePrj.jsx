import React from 'react'

const DeletePrj = ({setDel,onDelPrj}) => {


  return (
    <div className='absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[12vw] rounded-xl bg-[#3C3D37] px-8 py-6'>
       <div className='text-2xl font-bold'>
            <p className='font-medium text-red-500 pb-5' >Do you really want to Delete this Project Idea?</p>
            <p className='text-xl font-medium'> <span className='text-2xl'>NOTE:</span> This data will be permanently deleted</p>
       </div>
       <div className='flex gap-5 justify-end pt-5 items-center'>
            <button onClick={()=>setDel("notActive")} className='px-3 py-2 bg-[#697565] font-mono text-lg rounded-xl cursor-pointer'>Cancle</button>
            <button onClick={onDelPrj} className='px-3 py-2 bg-red-500 font-medium text-xl rounded-xl cursor-pointer'>Delete</button>
       </div>
    </div>
  )
}

export default DeletePrj
