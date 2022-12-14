import React from 'react'
import logo from "../assets/images/lutrics-eye-logo.png"
import bg from "../assets/images/undraw_alert_re_j2op (1).svg"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Landing() {
  return (
   <Wrapper>
     <main>
        <nav >
      <img src={logo} alt='logo' className='logo' style={{ height: "100%"}}/>
        </nav>
        <div className='container page'>

            <div className='info'>

            <h1>Lutrics <span>Eye</span></h1>
            <p>Lutrics eye is a web-based application, which enables prompt and easy reporting of events and activities..</p>
             <Link to='/register'>
             <button className='btn btn-hero'>Get Started</button>
             </Link>
            
            </div>
              
            <img src={bg} alt='side-img' className='img'/>
        </div>
    </main>
   </Wrapper>
     
  )
}

export default Landing

const Wrapper = styled.main`
nav{
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding-top: 20px;
}

.page{
        min-height: calc(90vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: .5rem;
    }

    h1{
        font-weight: 700; 
      
    }

main .img{
    display: none;
}    

@media (min-width: 992px) {
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem

    }
    main .img{
    display: block;
} 
}
`