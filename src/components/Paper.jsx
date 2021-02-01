import React, { useContext, useEffect } from 'react'
import paper from '../assets/static/images/icon-paper.svg';
import { randomOpc } from '../custom/randomOpc';
import { winResult } from '../custom/winResult';
import { UserContext } from '../UserContext';

export const Paper = () => {
  const { select, setSelect,setMaquinaInit,resp,  setResp,setWinner} = useContext( UserContext );

  const [setRand] = randomOpc();
  const [ resultado ] = winResult()

  useEffect( () => {
    resultado(select.opc, resp, setWinner);
  },[select, resp, setWinner, resultado])

  const handleClickpaper= (e) => {
    setSelect(
      {
        opc: '/static/media/icon-paper.8b57a6b1.svg',
        stateRock: false,
        statePaper:true,
        stateScissors: false,
      }
    )
    setMaquinaInit(false);
    setRand(setResp);
  }
  return (
    <div>
      <div onClick={ handleClickpaper } className={ select.statePaper ? 'papel click' : 'papel'}>
          <div className='container_img-paper'>
            <img name={select.opc} src={paper} alt="" />
          </div>
        </div>
    </div>
  )
}
