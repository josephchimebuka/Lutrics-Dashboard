import React from 'react'
import Wrapper from '../../assets/wrappers/StatItem'

const StatItem = ({color, title,icon, count}) => {
  return (
  <Wrapper color={color}>
    <header>
        <span className='count'>{count}</span>
        <span>{icon}</span>
    </header>
    <h5>{title}</h5>
  </Wrapper>
  )
}

export default StatItem
