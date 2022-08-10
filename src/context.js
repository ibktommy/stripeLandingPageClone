import React, { useState, useContext } from 'react'
// import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  // Setting Global States and Functions
  const [openSideBar, setOpenSidebar] = useState(false)
  const [openMenu, setIsOpenMenu] = useState(false)

  const openSideBarHandler = () => {
    setOpenSidebar(true)
  }

  const closeSideBarHandler = () => {
    setOpenSidebar(false)
  }

  const openMenuHandler = () => {
    setIsOpenMenu(true)
  }

  const closeMenuhandler = () => {
    setIsOpenMenu(true)
  }


  return (
    <AppContext.Provider value={{
      openSideBar,
      openSideBarHandler,
      closeSideBarHandler,
      openMenu,
      openMenuHandler,
      closeMenuhandler,
    }}>
      {children}
    </AppContext.Provider>
  )
}

// CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext)
}



