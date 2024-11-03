import React, { useEffect, useState } from 'react'
import game from './Games.module.scss'
const Games = () => {
  const [pokemon,setPokemon]= useState([])
  const [clickedPokemon,setClickPokemon] = useState([])
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)

  const fetchPokemon = async ()=>{
    const pokemonList = [];
    for(let i = 1;i<=12; i++){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const data = await response.json()
      pokemonList.push({
        id:data.id,
        name:data.name,
        image:data.sprites.front_default

      })
    }
    setPokemon(pokemonList)
  }
  useEffect(()=>{
fetchPokemon()
  },[])
  const shuffleArray = (array)=>{
return[...array].sort(()=>Math.random()-0.5)
  }
  const handleClick =(id) =>{
if(clickedPokemon.includes(id)){
  setClickPokemon([])
  setScore(0);
  alert("game over")
}
else{
  setClickPokemon([...clickedPokemon, id])
  setScore(score+1)
  setBestScore(Math.max(bestScore,score+1))
  if(score + 1 === 12){
    alert("You've won!");
    setClickPokemon([]);
    setScore(0)
  }

}

setPokemon(shuffleArray(pokemon))
  }
  return (
<div id='interesting' className={game.game}>
     <div className={game.container}>
      <div className={game.gameScore}>
      <h1 className={game.gameTit}>Pokemon Memory Game</h1>
      
        <div className={game.gameInnerBox}>
        <p>Score:{score}</p>
        <p>Best Score:{bestScore}</p>
        </div>
      </div>
      <div className={game.gameCardParent}>
        {
          pokemon.map(p=>{
          return(
            <div className={game.gameCard} key={p.id} onClick={()=>handleClick(p.id)}>
<img src={p.image} alt="" />
<h1>{p.name}</h1>
            </div>
          )
          })
        }
      </div>
    </div>
   </div>
  )
}

export default Games