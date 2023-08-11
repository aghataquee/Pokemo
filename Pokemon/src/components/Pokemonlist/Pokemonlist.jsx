import {useEffect} from 'react'
import {useState} from 'react';
import axios from 'axios';
import './Pokemonlist.css';
import usePokemonlist from '../../hooks/usePokemonlist.jsx';
import Pokemon from '../Pokemon/Pokemon';
function Pokemonlist(){
    /*
    we can merge them all state variables in single state variable in the form of object
    const [isloading,setloading]=useState(true);
    const [pokemonlist,setpokemon]=useState([]);
    const [currUrl,setUrl]=useState([h'ttps://pokeapi.co/api/v2/pokemon'])
    const [nextUrl,setnextUrl]=useState('');
    const [prevUrl,setprevUrl]=useState('');*/
    const {pokemonSearchlist,setlist}=usePokemonlist('https://pokeapi.co/api/v2/pokemon',false);
    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">{(pokemonSearchlist.isloading) ? 'loading...':
             pokemonSearchlist.pokemonlist.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
            </div>
            <div className="btns">
                <button disabled ={pokemonSearchlist.prevUrl==null} onClick={()=>setlist({...pokemonSearchlist,currUrl:pokemonSearchlist.prevUrl})}>Prev</button>
                <button disabled={pokemonSearchlist.nextUrl==null} onClick={()=>setlist({...pokemonSearchlist,currUrl:pokemonSearchlist.nextUrl})}>Next</button>
            </div>
             
             
        </div>
    )
}
export default Pokemonlist;