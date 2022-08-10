import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSideBarHandler, openMenuHandler, closeMenuHandler } = useGlobalContext()

  const displaySubMenu = (e) => {
    const pageText = e.target.textContent
    const navBtnPosition = e.target.getBoundingClientRect()
    const center  = (navBtnPosition.left + navBtnPosition.right) / 2
    const bottom = navBtnPosition.bottom -3

    openMenuHandler(pageText, { center, bottom })
  }
  
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className='nav-logo' />
          <button className="btn toggle-btn" onClick={openSideBarHandler}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Developer
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
