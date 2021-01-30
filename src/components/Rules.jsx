import React, { useState } from 'react'
import rul from '../assets/static/images/image-rules-bonus.svg'
export const Rules = () => {
  
  const [cambio, setCambio] = useState(false);

  const handleClick = (e) =>{
    setCambio( !cambio )
  }
  return (
    <div>
      <div className={ cambio ===false ? 'none' : 'container_rules'}>
        <div className='container_rules-img' >
          <figure>
            <button onClick={handleClick} className={ cambio === false ? 'none' : 'button_cerrar'}>X</button>
            <img src={rul} alt=""/>
          </figure>
        </div>
    </div>
    <button className='button_rules' onClick={ () => {
      setCambio(true)
    }} >Rules</button>
    </div>
  )
}