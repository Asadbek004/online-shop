import React, {createContext, useState, useEffect} from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
    const url = "https://course-api.com/react-store-products"
    const [array, setArray] = useState([])
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArray(data)
    }
    useEffect(() => {
        getData()
        console.log('Hwllo world')
    }, [])


    return (
        <div>
            <Context.Provider value={{array}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {ContextProvider, Context};