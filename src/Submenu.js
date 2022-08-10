import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openMenu } = useGlobalContext()

  return (
    <aside className={`${openMenu ? 'submenu show' : 'submenu'}`}>
      Submenu
    </aside>
  )
}

export default Submenu
