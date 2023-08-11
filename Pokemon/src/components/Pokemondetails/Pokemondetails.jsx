import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import usePokemonlist from '../../hooks/usePokemonlist.jsx';
import './Pokemondetails.css'
import usePokemontypes from '../../hooks/usePokemontypes.jsx'
function Pokemondetails(){
    
    const {id}=useParams();
    const [pokemon]=usePokemontypes(id);

    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-name">name:{pokemon.name}</div>
            <img className="pokemon-image" src={pokemon.image} />
            <div>Height:{pokemon.height}</div>
            <div>Weight:{pokemon.weight}</div>
            <div className="pokemon-types">
                {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}
            </div>
            <div>
                <ul>
                   {pokemon.similarpokemon &&  pokemon.similarpokemon.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div>

        </div>
    )
}
export default Pokemondetails;