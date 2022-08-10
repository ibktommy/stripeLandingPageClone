import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openMenu, location } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const subMenu = container.current
    const { center, bottom } = location
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside className={`${openMenu ? 'submenu show' : 'submenu'}`} ref={container}>
      Submenu
    </aside>
  )
}

export default Submenu
