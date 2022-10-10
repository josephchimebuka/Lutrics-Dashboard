import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import logo from "../assets/images/logo.png"
import NavLinks from './NavLinks'
import { useSelector } from 'react-redux'

const BigSidebar = () => {
  const {isSidebarOpen} = useSelector((store)=> store.user);
  return (
 <Wrapper>
  <div className={isSidebarOpen ?'sidebar-container' : 'sidebar-container show-sidebar'}>
    <div className='content'>
    <div className='header'>
          <img src={logo} alt='logo' className='logo' style={{width: '100%'}} />
          </div>
          <NavLinks/>
    </div>
  </div>
 </Wrapper>
  )
}

export default BigSidebar
