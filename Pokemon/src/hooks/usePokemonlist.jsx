import axios from 'axios';
import {useEffect} from 'react'
import {useState} from 'react';
function usePokemonlist(url,type){
    const [pokemonSearchlist,setlist]=useState({
        pokemonlist:[],
        isloading:true,
        currUrl:url,
        nextUrl:'',
        prevUrl:''

    })
    async function Downloadpokemon(){
        //setloading(true);
        setlist({...pokemonSearchlist,isloading:true})
        
        const response=await axios.get(pokemonSearchlist.currUrl);
        const pokemonResults=response.data.results;
        console.log("response is",response.data.pokemon);
        setlist((state)=>({ ...state,nextUrl:response.data.next}));
        setlist((state)=>({...state,prevUrl:response.data.previous}));

       /* if(type){
           // console.log(response.data.pokemon);
           //taking 5 pokemons from the pokemon array
            setlist((state)=>({...state,pokemonlist:response.data.pokemon.slice(0,5)}))
            
        }*/
        const pokemonPromise=pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const pokemondata=await axios.all(pokemonPromise);
            //console.log(pokemondata);
        const pokemondetails=pokemondata.map((pokemon)=>{
        const pokemondetail=pokemon.data;
        return {
            id:pokemondetail.id,
            name:pokemondetail.name,
            image:(pokemondetail.sprites.other)?pokemondetail.sprites.other.dream_world.front_default:pokemondetails.sprites.front_shinny,
            types:pokemondetail.types
        }
            
        })
        setlist((pokemonSearchlist)=>({...pokemonSearchlist,pokemonlist:pokemondetails,isloading:false}));
    }
        
        
        //console.log(response.data);


    useEffect(()=>{
        Downloadpokemon();
    },[pokemonSearchlist.currUrl]);

    return {pokemonSearchlist,setlist}
        
}
export default usePokemonlist;