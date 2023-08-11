import axios from 'axios';
import {useState,useEffect} from 'react';
function usePokemontypes(id){
    const [pokemon,setpokemon]=useState({});
    async function downloadpokemon(){
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const similartypePokemons=await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types?response.data.types:{}}`);


        console.log(response.data)
        setpokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height,
            weight:response.data.weight,
            types:response.data.types.map((t)=>t.type.name),
            similarpokemon:similartypePokemons.data.pokemon.slice(0,5)

        })


    }
    const {pokemonSearchlist}=usePokemonlist(`https://pokeapi.co/api/v2/type/${pokemon.types ?pokemon.types[0]:'fire'}`,true)
    useEffect(()=>{
        downloadpokemon();
    },[]);
    return [pokemon];
}
export default usePokemontypes;