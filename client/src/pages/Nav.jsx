import React from 'react'
import {useApp} from '../Context/AppContext'
import { Link } from 'react-router-dom'

const Nav = () => {

    const {view,setView,setAni} = useApp()

    const handleClick = () =>{
        if(view === false){
            setView(true)
            setAni(true)
        }else{
            setAni(false)
        }
    }

    return (
        <div>
            <div className='flex justify-between px-10 py-5'>
               <Link to='/'> <p className='font-bold text-6xl'>
                    PIB
                </p></Link>
                <div className='font-bold text-4xl flex justify-center items-center bg-[#697565] rounded-2xl pl-4 pr-6 pt-2 pb-3 hover:bg-[#5a6656] hover:cursor-pointer focus:border-0 hover:text-[#d4c7b7] '>
                    <Link to='/' ><button onClick={handleClick} className='cursor-pointer'>
                        <span>+</span> <span className=''>New</span>
                    </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
