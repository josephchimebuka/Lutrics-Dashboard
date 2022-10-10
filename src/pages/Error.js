import React from 'react'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
  <Wrapper>
    <div>
        <img src={img} alt='not found'/>
        <h3>Error</h3>
        <p>You have found a page that does not exist</p>
        <Link to='/'>back home</Link>
    </div>
  </Wrapper>
  )
}

export default Error 