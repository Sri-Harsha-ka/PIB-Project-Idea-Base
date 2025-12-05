import React, { useContext, useState, useRef, createContext, Children, useEffect } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const baseURL = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api'

    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const [ani, setAni] = useState(false)
    const [prj, setPrj] = useState([])
    const [loaded, setLoaded] = useState({})
    const [fet, setFet] = useState([])

    const loadPrj = async () => {
        const res = await axios.get(`${baseURL}/read`)
        setPrj(res.data)
    }

    const loadPrjOne = async (prjId) => {
        const res = await axios.get(`${baseURL}/readone/project/${prjId}`)
        setLoaded(res.data)
    }

    const createPrj = async (data) => {
        await axios.post(`${baseURL}/create`, data)
        loadPrj()
        toast.success("Created a Project" , {style:{background:"#3C3D37"}})
    }

    const updatePrj = async (data, prjId) => {
        await axios.post(`${baseURL}/update/project/${prjId}`, data)
        loadPrjOne(prjId)
        toast.success("Updated a Project", {style:{background:"#3C3D37"}})
    }

    const delPrj = async (prjId)=>{
        await axios.post(`${baseURL}/delete/project/${prjId}`)
        navigate('/')
        loadPrj()
        toast.success("Deleted a Project", {style:{background:"#3C3D37"}})
    }

    const createFeature = async (data, prjId) => {
        await axios.post(`${baseURL}/create/${prjId}`, data)
        loadFeature(prjId)
        toast.success("Created a Feature" , {style:{background:"#3C3D37"}})
    }

    const loadFeature = async (prjId) => {
        const res = await axios.get(`${baseURL}/read/${prjId}`)
        setFet(res.data)
    }

    const updateFeature = async (prjId,data,fetId)=>{
        await axios.post(`${baseURL}/update/feature/${prjId}/${fetId}`,data)
        loadFeature(prjId)
        toast.success("Updated a Feature" , {style:{background:"#3C3D37"}})
    }

    const deleteFeature = async (prjId, fetId) => {
        await axios.post(`${baseURL}/delete/feature/${prjId}/${fetId}`)
        loadFeature(prjId)
        toast.success("Deleted a Feature", {style:{background:"#3C3D37"}})
    }



    return (
        <AppContext.Provider value={{
            view,
            setView,
            ani,
            setAni,
            loadPrj,
            prj,
            setPrj,
            createPrj,
            loadPrjOne,
            loaded,
            setLoaded,
            createFeature,
            fet,
            setFet,
            loadFeature,
            deleteFeature,
            delPrj,
            updatePrj,
            updateFeature
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)