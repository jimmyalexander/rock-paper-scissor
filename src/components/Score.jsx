import React,{ useContext } from 'react';
import { UserContext } from '../UserContext';
import logo from '../assets/static/images/logo.svg'

export const Score = () => {
  const {
  count
  } = useContext( UserContext )


  
  return (
   <div className='component_score'>
      <div className='container_score'>
        <div className='container_title'>
          <img src={ logo } alt=""/>
        </div>
        
        <div className='score'>
          <p>score</p>
          <strong>{count}</strong>
        </div>
      </div>    
   </div>
  )
}
