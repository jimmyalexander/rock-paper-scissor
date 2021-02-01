import rock from '../assets/static/images/icon-rock.svg';
import paper from '../assets/static/images/icon-paper.svg';
import scissors from '../assets/static/images/icon-scissors.svg';
 export const randomOpc = () => {
  
  const arrayImages = [rock,paper,scissors];
  const rand = () =>{
    return(Math.floor(Math.random()* 3 + 1));
  }
  const setRand = (setState) =>{
    setState(arrayImages[rand()- 1] )
  }
  return[setRand]
 }
 