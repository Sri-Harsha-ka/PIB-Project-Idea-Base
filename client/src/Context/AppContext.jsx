import React,{useContext,useState,useRef,createContext, Children, useEffect} from "react";
import axios from 'axios'

const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const baseURL = 'http://localhost:3000/api'

    const [view,setView] = useState(false)
    const [ani,setAni] = useState(false)
    const [prj,setPrj] = useState([])

    const loadPrj = async () =>{
        const res = await axios.get(`${baseURL}/read`)
        console.log(res.data)
        setPrj(res.data)
    }

    const createPrj = async (data) =>{
        await axios.post(`${baseURL}/create`,data)
        loadPrj()
    }

    const updatePrj = async (data) =>{
        await axios.post(`${baseURL}/update/project/${id}`)
        loadPrj()
    }

    useEffect(()=>{
        loadPrj();
    },[])

    return(
        <AppContext.Provider value={{
            view,
            setView,
            ani,
            setAni,
            loadPrj,
            prj,
            setPrj,
            createPrj
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () =>  useContext(AppContext)