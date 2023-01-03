import axios from 'axios'
import React, {useState, useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    //estados globais: 
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pokemon`)
        .then(response => setPokemonNames(response.data.results))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const listPokemons = []
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then( response => {
                listPokemons.push(response.data)
                if(listPokemons.length === 20) {
                    setPokemons(listPokemons)
                }
            }
                
            )
            .catch(err => console.log(err))
        })
    }, [pokemonNames] )

    const data = {pokemons, setPokemons, pokedex, setPokedex }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState