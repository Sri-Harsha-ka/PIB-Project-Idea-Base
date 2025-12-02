import React,{useContext,useState,useRef,createContext, Children} from "react";

const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [view,setView] = useState(false)
    const [ani,setAni] = useState(false)

    return(
        <AppContext.Provider value={{
            view,
            setView,
            ani,
            setAni,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () =>  useContext(AppContext)