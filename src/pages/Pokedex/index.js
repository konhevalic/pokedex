import React, { useContext } from 'react'
import PokedexCard from '../../components/PokedexCard'
import Header from '../../components/Header'
import GlobalStateContext from '../../global/GlobalStateContext';
import {PokemonContainer} from '../../components/PokemonContainer'
import {MainContainer} from '../../components/MainContainer'


function Pokedex() {
  const {pokedex} = useContext(GlobalStateContext)

  const pokedexList = pokedex && pokedex.map((poke) => {
    return (
      <PokedexCard
        key={poke.name}
        pokemon={poke}
        button={'Remover'}
        isPokedex={false}
        
      />
    )
  } )

  return (
    <>
      <Header page={'POKEDEX'} button={'IR PARA LISTA DE POKEMONS'} pokedex={true}/>
      <MainContainer>
        <PokemonContainer>
          {pokedexList}   
        </PokemonContainer>
      </MainContainer>
    </>
  );
}

export default Pokedex;
