import React,{ useContext } from 'react'
import { UserContext } from '../UserContext'

export const Score = () => {
  const {
  count
  } = useContext( UserContext )


  
  return (
   <div className='component_score'>
    <div className='pruebas_svg'>
    <svg width="400" height="180">
         <rect x="0.1" y="20" rx="20" ry="20" width="500" height="50"/>
      </svg>
      <div className='container_score'>
        <div className='container_title'>
          <strong>ROCK</strong>
          <strong>PAPER</strong>
          <strong>SCISSORS</strong>
        </div>
        
        <div className='score'>
          <p>score</p>
          <h1>{ count }</h1>
        </div>
      </div>
    </div>     
   </div>
  )
}
