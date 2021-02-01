import React, { useContext, useEffect } from 'react'
import scissors from '../assets/static/images/icon-scissors.svg';
import { randomOpc } from '../custom/randomOpc';
import { winResult } from '../custom/winResult';
import { UserContext } from '../UserContext';

export const Scissor = () => {
  const { select, setSelect,setMaquinaInit,resp,setResp,setWinner} = useContext( UserContext );

  const [ setRand ] = randomOpc();

  const [ resultado ] = winResult()

  useEffect( () => {
    resultado(select.opc, resp, setWinner);
  },[select, resp, setWinner, resultado])


  const handleClickScissors = (e) => {
    setSelect(
      {
        opc: '/static/media/icon-scissors.3b1a5d7e.svg',
        stateRock: false,
        statePaper:false,
        stateScissors: true,
      }
    )
    setMaquinaInit(false);
    setRand(setResp);
  }
  return (
    <div>
      <div onClick={ handleClickScissors } className={ select.stateScissors ? 'tijera click' : 'tijera'}>
          <div className='container_img-scissor'>
            <img name={select.opc} src={scissors} alt=""/>
          </div>
        </div>
    </div>
  )
}
