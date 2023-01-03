import React, { useContext, useEffect, useState } from 'react'
import PokedexCard from '../../components/PokedexCard'
import Header from '../../components/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import {PokemonContainer} from '../../components/PokemonContainer'
import {MainContainer} from '../../components/MainContainer'

function PokemonsList() {
  const {pokemons, pokemonNames} = useContext(GlobalStateContext)

  console.log('oi ' + pokemonNames)
    
  return (
    <div>
      <Header page={'LISTA DE POKEMONS'} button={'Ver minha pokedex'} isDetails={false} />
      <MainContainer>
        <PokemonContainer>
        {pokemons && pokemons.map((poke) => {
          return (
            <PokedexCard
              key={poke.name}
              pokemon={poke}
              button={'Adicionar'}
              isPokedex={true}
              {...console.log('aaa' + poke.pokemonNames)}
            />
          )
        } )}
        </PokemonContainer>
      </MainContainer>
    </div>
  );
}

export default PokemonsList;
