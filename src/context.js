import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  // Setting Global States and Functions
  const [openSideBar, setOpenSidebar] = useState(false)
  const [openMenu, setIsOpenMenu] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSideBarHandler = () => {
    setOpenSidebar(true)
  }

  const closeSideBarHandler = () => {
    setOpenSidebar(false)
  }

  const openMenuHandler = (PageText, coordinates) => {
    const page = sublinks.find((link) => link.page === PageText)
    setPage(page)
    setLocation(coordinates)
    setIsOpenMenu(true)
  }

  const closeMenuHandler = () => {
    setIsOpenMenu(false)
  }


  return (
    <AppContext.Provider value={{
      openSideBar,
      openSideBarHandler,
      closeSideBarHandler,
      openMenu,
      openMenuHandler,
      closeMenuHandler,
      location,
      page,
    }}>
      {children}
    </AppContext.Provider>
  )
}

// CUSTOM HOOK
export const useGlobalContext = () => {
  return useContext(AppContext)
}



