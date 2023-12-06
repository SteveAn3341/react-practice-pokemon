import {useEffect,useState} from 'react';
import axios from "axios";

export default function LearnUseEffect(){
  const [name,setName ] = useState("steven");
  const[pokeName,setPokeName] = useState("")
  const [pokemonData, setPokemonData] = useState(null);
useEffect(() =>{
  if (pokeName)( axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
  .then((response) =>{
  setPokemonData(response.data)
  }))
 

}, [pokeName]);



  return (

    <>
    
    <div>
    
    
    <h1>
    hello {name}
    </h1>
    <input type = 'text' 
     onChange={(event) => setName(event.target.value) }
     value={name}>

     </input>
    <button onClick={() =>{setPokeName(name) ;setName("") }} >click me</button>
    

    </div>

    {pokemonData && (
      <>
      <h2>
        {pokemonData.species.name}
      </h2>
      <ul>
        {pokemonData.abilities.map((item, index )=>(
          <li key= {index}>{item.ability.name}</li>

      ))}
      </ul>
      </>
    )}
    
    </>
    
    
  );
}