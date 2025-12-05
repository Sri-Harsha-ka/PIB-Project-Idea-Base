import React,{useContext,useState,useRef,createContext, Children, useEffect} from "react";
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'

const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const baseURL = 'http://localhost:3000/api'

    const [view,setView] = useState(false)
    const [ani,setAni] = useState(false)
    const [prj,setPrj] = useState([])
    const [loaded, setLoaded] = useState({})

    const loadPrj = async () =>{
        const res = await axios.get(`${baseURL}/read`)
        setPrj(res.data)
    }

    const loadPrjOne = async (prjId) =>{
        const res = await axios.get(`${baseURL}/readone/project/${prjId}`)
        setLoaded(res.data)
    }

    const createPrj = async (data) =>{
        await axios.post(`${baseURL}/create`,data)
        toast("Created a Project")
        loadPrj()
    }

    const updatePrj = async (data , id) =>{
        await axios.post(`${baseURL}/update/project/${id}` , data)
        loadPrj()
    }

    return(
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
            setLoaded
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () =>  useContext(AppContext)