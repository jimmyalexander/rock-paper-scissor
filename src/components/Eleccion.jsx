import React, { useContext } from 'react'
import triangle from '../assets/static/images/bg-triangle.svg'
import { UserContext } from '../UserContext'
import { Paper } from './Paper'
import { Rock } from './Rock'
import { Scissor } from './Scissor'


export const Eleccion = () => {
  const { select} = useContext( UserContext );
  const NoDisplay = () => {
    if( select.stateRock === true || select.statePaper === true || select.stateScissors === true) {
      return 'none'
    }
    else{
      return 'container_opc'
    }
  }

  return (
    <div>
      <div className={ NoDisplay() } >
        <figure className='container_img-triangle'>
          <img src={ triangle } alt='triangle-symbol' />
        </figure>
        <Rock />
        <Paper />
        <Scissor />
      </div>
    </div>
  )
}
