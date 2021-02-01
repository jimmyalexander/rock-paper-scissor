import React, { useState } from 'react'
import { Score } from '../components/Score';
import { Principal } from '../components/Principal';
import { Footer } from '../components/Footer';
import { UserContext } from '../UserContext';

import '../assets/styles/App.scss';
export const App = () => {
  const [select, setSelect] = useState({
    opc: '',
    stateRock: false,
    statePaper: false,
    stateScisoors: false,
   
  });
  const [resultadoUser, setResultadoUser] = useState('');
  const [resultadoMaquina, setResultadoMaquina] = useState('')
  const [count, setCount] = useState(0);
  const [maquinainit, setMaquinaInit] = useState(false);
  const [resp, setResp] = useState('');
  const [winner, setWinner] = useState('');


  return (
    <UserContext.Provider value={
     {
      select,
      setSelect,
      resultadoMaquina,
      setResultadoMaquina,
      resultadoUser,
      setResultadoUser,
      count,
      setCount,
      maquinainit,setMaquinaInit,
      resp,setResp,
      winner,setWinner
     }
    }>
      <Score/>
      <Principal />
      <Footer />
    </UserContext.Provider>
    
  )
}
