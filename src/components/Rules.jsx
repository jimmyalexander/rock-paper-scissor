import React, { useContext, useState } from 'react'
import rul from '../assets/static/images/image-rules.svg'
import { UserContext } from '../UserContext';
export const Rules = () => {
  const { select } = useContext( UserContext);
  const [cambio, setCambio] = useState(false);

  const handleClick = (e) =>{
    setCambio( !cambio )
  }
  return (
    <div className={ select.opc !== '' ? 'none' : ''}>
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