import React, { useEffect } from "react"
import { useState,useContext } from "react"
import {Routes,Route} from "react-router-dom"
import {useApp} from "./Context/AppContext"
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import Create from "./components/Create"


function App() {

  const {view,setView,setAni,ani} = useApp()

  useEffect(()=>{

    if(ani === false){
      setTimeout(()=>{
        setView(false)   
      } , 200)
    }
  } , [ani])


  return (
    <>
      <div className="bg-[#1E201E] min-h-screen text-[#ECDFCC]">
        <Nav />
        {view===true && <Create />}
        <Home />
      </div>
    </>
  )
}

export default App
