import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openMenu, location, page: { page, links } } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const subMenu = container.current
    const { center, bottom } = location
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside className={`${openMenu ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
        <div className={`submenu-center col-2`}>
          {
            links.map((link, index) => {
              const { label, url, icon } = link
              return (
                <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
    </aside>
  )
}

export default Submenu
