import React from 'react'
import logo from '../../assets/images/undraw_accept_terms_re_lj38.svg'
import Wrapper from '../../assets/wrappers/StatsContainer'
import StatItem from './StatItem'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import styled from 'styled-components'


const defaultStat=[
  {
    title: 'Number of reports made',
    color: '#e9b949',
    count: '0',
    icon: <FaSuitcaseRolling />
  },
  {
    title: 'Responded reports',
    color: '#647acb',
    count: '0',
    icon: <FaCalendarCheck />
  }, {
    title: 'Pending reports',
    color: '#d66a6a',
    count: '0',
    icon: <FaBug />
  }
]

function Home() {
  return (
  <>
     <Wrapper>
        
        {defaultStat.map((stat,index)=>{
          return(
          <StatItem key={index} {...stat}></StatItem>
          )
        })}
      </Wrapper>
      <div>
        <h1>Registered Organizations</h1>
      </div>
     <Image>
     <img src={logo} alt='emergency' style={{width: '20%', height: 'auto'}}/>
     </Image>
  </>
  )
}


const Image =  styled.div`
display: flex;
align-items: center;
margin-top: 50px;
justify-content: center;
`
export default Home
