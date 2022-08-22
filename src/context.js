import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [sidebar, setSidebar] = useState(false);
    const [stylist, setStylist] = useState([])
    const [loading, setLoading] = useState(true)
    const [homeInput, setHomeInput] = useState({
      name: '',
      address: '',
      time: ''
    })
    
    const getPerson = async () => {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setStylist(data);
      setLoading(false)
    }
  
    useEffect(() => {
      getPerson()
    }, [])

    
    const openSidebar = () =>{
        setSidebar(!sidebar)
    }

  return (
    <AppContext.Provider
      value={{ sidebar, setSidebar, openSidebar, homeInput, setHomeInput, stylist, loading }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
