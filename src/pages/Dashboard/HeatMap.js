import React from 'react'
import PlateauMap from '../../assets/images/plateau-map.png'

function HeatMap() {

  return (
    <div className='heatmap'>
      <h2>Heat Map</h2>
      <img src={PlateauMap} alt='Plateau state map' />
    </div>
  )
}

export default HeatMap
