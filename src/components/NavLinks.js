import React from 'react'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'


const NavLinks = ({toggleSidebarOpen}) => {
  return (
    <div className='nav-links'>
    {links.map((link)=>{
      const {text, path, icons,id} = link
      return <NavLink to={path} className={({isActive}) =>{
        return isActive ? 'navlink active': 'nav-link'
      }}
      key={id} onClick={toggleSidebarOpen
      }>
        <span className='icon'>{icons}</span>
          {text}
      </NavLink>
    })}
  </div>
  )
}

export default NavLinks
