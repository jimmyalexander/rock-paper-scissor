import React, { useContext, useEffect } from 'react'
import rock from '../assets/static/images/icon-rock.svg';
import { randomOpc } from '../custom/randomOpc';
import { winResult } from '../custom/winResult';
import { UserContext } from '../UserContext';

export const Rock = () => {
  const { select, setSelect,setMaquinaInit, resp, setResp, setWinner} = useContext( UserContext );

  const [ setRand ] = randomOpc();

  const [ resultado ] = winResult()

  useEffect( () => {
    resultado(select.opc, resp, setWinner);
  },[select, resp, setWinner, resultado])


  const handleClickRock = (e) => {
    setSelect(
      {
        opc:'/static/media/icon-rock.476e90a9.svg',
        stateRock: true,
        statePaper:false,
        stateScissors: false,
      }
    )
    setMaquinaInit(false);
    setRand(setResp)
  }
  return (
    <div>
      <div  onClick={ handleClickRock } className={ select.stateRock ? 'piedra click' : 'piedra'}>
          <div className='container_img-rock'>
            <img  name={select.opc} src={rock} alt=""/>
          </div>
        </div>
    </div>
  )
}
