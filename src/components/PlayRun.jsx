import React, { useContext } from 'react';

import { UserContext } from '../UserContext';
import { Rock } from './Rock';
import { Paper } from './Paper';
import { Scissor } from './Scissor';

export const PlayRun = () => {
  
  const { select, setSelect, resp, setResp, winner, setWinner, count, setCount } = useContext( UserContext );
 
  //Emojis mostrados por la maquina
  /* const faceWinner = ['😂','😁','😎'];
  const faceLose = ['😠','😡','😭']; */
  const opc = () => {
    if( select.opc === "/static/media/icon-rock.476e90a9.svg"){
      return <Rock />
    }
    else if( select.opc ===  "/static/media/icon-paper.8b57a6b1.svg"){
      return <Paper />
    }
    else if( select.opc === "/static/media/icon-scissors.3b1a5d7e.svg" ){
      return <Scissor />
    }
  }
  
  
  
  const handleClick = () => {
    setSelect({
      opc: '',
      stateRock: false,
      statePaper: false,
      stateScisoors: false,
    })
    setWinner('');
    if( winner === 'YOU WIN'){
      setCount( count + 1)
    }
    setResp('')
  }
  return (
    <div className={ select.opc === '' ? 'none' : 'container_run'}>
       <div className='run_user' >
        <div className='user'>
        {
          opc() 
        }
        </div>
      </div>

      <div className="container_button">
        <h1>{winner}</h1>
        <button
          onClick={ handleClick }
        >Play Again</button>
      </div>

      <div className='run_machine' >
        <div className='machine'>
          <img src={ resp } alt=''/>
        </div>
      </div>
    </div>
  )
}
