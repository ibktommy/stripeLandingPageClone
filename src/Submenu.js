import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openMenu, location, page: { page, links } } = useGlobalContext()

  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const subMenu = container.current
    const { center, bottom } = location
    subMenu.style.left = `${center}px`
    subMenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }

  }, [location, links])

  return (
    <aside className={`${openMenu ? 'submenu show' : 'submenu'}`} ref={container}>
      <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
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
