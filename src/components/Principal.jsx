import React, { useContext, useEffect, useState } from 'react'
import rock from '../assets/static/images/icon-rock.svg';
import paper from '../assets/static/images/icon-paper.svg';
import scissors from '../assets/static/images/icon-scissors.svg';
import favicon from '../assets/static/images/favicon-32.png'
import { UserContext } from '../UserContext';

export const Principal = () => {
  const {select, setSelect,
        resultadoUser,setResultadoUser,
        resultadoMaquina,setResultadoMaquina,
        count,setCount
        } = useContext(UserContext);

  const [maquinainit, setMaquinaInit] = useState(false);
  const [resp, setResp] = useState('');
  
  //Emojis mostrados por la maquina
  const faceWinner = ['😂','😁','😎'];
  const faceLose = ['😠','😡','😭'];


  const arrayImages = [rock,paper,scissors];
  const rand = () =>{
    return(Math.floor(Math.random()* 3 + 1));
  }
  const setRand = () =>{
    setResp(arrayImages[rand()- 1] )
  }
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
  }
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
  }
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
  }
  useEffect( () => {
    if( select.opc === resp && resp !== ''){
      setTimeout(() => {
        setResultadoUser('Empate');
        setResultadoMaquina('Empate');
      }, 2500);
    }
    if(select.opc === '/static/media/icon-rock.476e90a9.svg' && resp === '/static/media/icon-paper.8b57a6b1.svg'){
      setTimeout(() => {
        setResultadoMaquina('Winner');
        setResultadoUser('Lose');
      }, 2500);
    }
    if(select.opc === '/static/media/icon-paper.8b57a6b1.svg' && resp === '/static/media/icon-rock.476e90a9.svg'){
      setTimeout(() => {
        setResultadoUser('Winner');
        setResultadoMaquina('Lose');
      }, 2500);
    }
    if(select.opc === '/static/media/icon-rock.476e90a9.svg' && resp === '/static/media/icon-scissors.3b1a5d7e.svg'){
      setTimeout(() => {
        setResultadoUser('Winner');
        setResultadoMaquina('Lose');
      }, 2500);
    }
    if(resp === '/static/media/icon-rock.476e90a9.svg' && select.opc === '/static/media/icon-scissors.3b1a5d7e.svg'){
      setTimeout(() => {
        setResultadoMaquina('Winner');
        setResultadoUser('Lose');
      }, 2500);
    }
    if( select.opc === '/static/media/icon-scissors.3b1a5d7e.svg' && resp === '/static/media/icon-paper.8b57a6b1.svg'){
      setTimeout(() => {
        setResultadoUser('Winner');
        setResultadoMaquina('Lose');
      }, 2500);
    }
    if( resp === '/static/media/icon-scissors.3b1a5d7e.svg' && select.opc === '/static/media/icon-paper.8b57a6b1.svg'){
      setTimeout(() => {
        setResultadoMaquina('Winner');  
        setResultadoUser('Lose');
      }, 2500);
    }
  },[resp, select.opc, setResultadoMaquina, setResultadoUser])

  return (
    <div className='container-principal'>
      <h2 className='resul_user'>USER: {resultadoUser}</h2>

       <div className='container-opc' >
        <div  onClick={ handleClickRock } className={ select.stateRock ? 'piedra click' : 'piedra'}>
          <div className=''>
            <img  name={select.opc} src={rock} alt=""/>
          </div>
        </div>
        <div onClick={ handleClickpaper } className={ select.statePaper ? 'papel click' : 'papel'}>
          <div>
            <img name={select.opc} src={paper} alt="" />
          </div>
        </div>
        <div onClick={ handleClickScissors } className={ select.stateScissors ? 'tijera click' : 'tijera'}>
          <div>
            <img name={select.opc} src={scissors} alt=""/>
          </div>
        </div>
      </div>

      <div className='container_buttons'>
        <button className='button_play' disabled={ maquinainit  ? true :false } onClick={() => {
          setMaquinaInit(
            { 
              maquinainit: true
            }
          )
          setRand()
          
        }}
         >PLAY</button>
        
        <button className='button_play-again' disabled={ maquinainit ? false : true} onClick={ () => {
          setSelect(
            { opc: '',
              stateRock: false,
              statePaper:false,
              stateScissors: false,
            }
          )
          if(resultadoMaquina === 'Lose'){
            setCount(count + 1)
          }
          setMaquinaInit(false)
          setResultadoMaquina('')
          setResultadoUser('')
          setResp('')
        } }>PLAY AGAIN</button>
      </div>

      <div className={ (resultadoMaquina === 'Winner' || resultadoMaquina === 'Lose' ? 'container_svg' : 'none' ) }>
        <p className='texto-svg'>{ resultadoMaquina === 'Winner' ? faceWinner[rand()-1] : faceLose[rand()-1] }</p>
        <svg height="140" width="500">
          <ellipse cx="230" cy="60" rx="50" ry="20" />
          <ellipse cx="300" cy="90" rx="10" ry="5" />
          <ellipse cx="320" cy="110" rx="5" ry="2" />
        </svg> 
       </div>  
      <div className={ maquinainit ? 'opc-maquina clickmaquina': 'opc-maquina'  }>
        <div className='maquina'>
          <img src={ maquinainit.opc !== '' ? resp : ''}/>
        </div>
      </div>
      <h2 className='resul_maquina'>MACHINE: {resultadoMaquina}</h2>
      
    </div>
  )
}
