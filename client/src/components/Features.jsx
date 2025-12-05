import React, { useState } from 'react'
import { useApp } from '../Context/AppContext'

const Features = ({ name, des, prjId, fetId }) => {

    const [edit, setEdit] = useState("notActive")
    const [form,setForm] = useState({
        FName:name,
        FDescription:des
    })

    const { deleteFeature , updateFeature } = useApp()

    const onDelFet = async () => {
        await deleteFeature(prjId, fetId)
    }

    const onUpdateFet = async()=>{
        await updateFeature(prjId,form,fetId)
        setEdit("notActive")
    }

    const onChange = (e )=>{
        const { name , value} = e.target
        setForm(prev=> ({...prev,[name]:value}))
    }


    return (
        <div className='bg-[#3C3D37] text-[#ECDFCC] w-[26vw] min-h-[10vw] px-10 py-5 rounded-lg cursor-pointer shadow-[#242723] hover:shadow-2xl transition-all'>
            <div className='flex justify-between items-center'>
                {
                    edit === "notActive" ?
                        <span className='text-xl font-semibold'>{name}</span> :
                        <input onChange={onChange} type="text" value={form.FName} name='FName' />
                }
                <div className='flex gap-5'>
                    <div onClick={() => setEdit("Active")} className='text-lg text-emerald-600 hover:underline transition-all '>
                        edit
                    </div>
                    <div onClick={onDelFet} className='text-lg text-red-400 hover:underline transition-all '>
                        delete
                    </div>
                </div>
            </div>
            <div className='px-5 py-5'>
                <p>
                    {
                        edit === "notActive" ?
                        <span className='text-lg'>{des}</span> :
                        <textarea onChange={onChange}  value={form.FDescription} name='FDescription' className='resize-none min-w-72 max-w-96 outline-none min-h-28 '> </textarea>
                    }
                </p>
            </div>
            {edit === "Active" && <button onClick={onUpdateFet} className='bg-[#697565] px-4 py-2 rounded-lg font-semibold text-lg'> Submit </button>}
        </div>
    )
}

export default Features
