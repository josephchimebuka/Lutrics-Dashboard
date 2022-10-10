import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {AiOutlineMenuUnfold,AiOutlineCaretDown} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import logo from "../assets/images/logo.png"
import {useDispatch, useSelector} from 'react-redux'
import { toggleSidebarOpen, logoutUser } from '../features/user/userSlice'

const Navbar = () => {

  const {user} = useSelector((store)=> store.user);
  const dispatch = useDispatch();

  const toggle = () =>{
    dispatch(toggleSidebarOpen())
  }

  const [showdropdown, setShowdropdown] = useState(false);
  return (
   <Wrapper>
    <div className='nav-center'>
    <button type='button'
     className='toggle-btn'
     onClick={toggle}><AiOutlineMenuUnfold/></button>
     <div>
     <img src={logo} alt='logo' className='logo' style={{ height: "100%"}}/>
     <h3 className='logo-text'>Dashboard</h3>
     </div>

     <div className='btn-container'>
      <button type='button'
      className='btn'
      onClick={()=> setShowdropdown(!showdropdown)}
      >
      <FaUserCircle/>
      Joseph
      <AiOutlineCaretDown/>
      </button>
      <div className={ showdropdown ? 'dropdown show-dropdown ': 'dropdown'}>
     <button className='dropdown-btn'
     onClick={()=> dispatch(logoutUser())}
     >
      logout
     </button>
      </div>
     </div>
    </div>
   </Wrapper>
  )
}

export default Navbar
