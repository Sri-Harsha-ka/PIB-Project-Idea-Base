import React, { useEffect } from "react"
import { useState,useContext } from "react"
import {Routes,Route} from "react-router-dom"
import {useApp} from "./Context/AppContext"
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import Create from "./components/Create"
import { ToastContainer } from "react-toastify"
import Project from "./pages/Project"


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
      <div className="bg-[#1E201E] min-h-screen text-[#ECDFCC] selection:bg-red-500">
        <Nav />
        {view===true && <Create />}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/project/:prjId" element={<Project/>}></Route>
        </Routes>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  )
}

export default App
