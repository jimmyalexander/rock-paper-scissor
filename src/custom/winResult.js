
export const winResult = () => {
  const resultado =(user, maquina,setState) => {
    if( user === '/static/media/icon-paper.8b57a6b1.svg' && maquina === '/rock-paper-scissor/static/media/icon-rock.476e90a9.svg' ){
        setState('YOU WIN');
    }
    else if( user === '/static/media/icon-rock.476e90a9.svg' && maquina === '/rock-paper-scissor/static/media/icon-scissors.3b1a5d7e.svg'){
      setState('YOU WIN');  
    }
    else if( user === '/static/media/icon-scissors.3b1a5d7e.svg' && maquina === '/rock-paper-scissor/static/media/icon-paper.8b57a6b1.svg'){
      setState('YOU WIN');  
    }
    else if( maquina === '/rock-paper-scissor/static/media/icon-paper.8b57a6b1.svg' && user === '/static/media/icon-rock.476e90a9.svg'){
      setState('YOU LOSE');  
    }
    else if( maquina === '/rock-paper-scissor/static/media/icon-rock.476e90a9.svg' && user === '/static/media/icon-scissors.3b1a5d7e.svg'){
      setState('YOU LOSE');  
    }
    else if( maquina === '/rock-paper-scissor/static/media/icon-scissors.3b1a5d7e.svg' && user === '/static/media/icon-paper.8b57a6b1.svg'){
      setState('YOU LOSE');  
    }
    else{
      setState('SAME');
    }
  } 
  return [resultado];
}
