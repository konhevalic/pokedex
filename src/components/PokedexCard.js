import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image} from 'react-bootstrap'
import GlobalStateContext from '../global/GlobalStateContext'
import styled from 'styled-components'

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

function PokedexCard({pokemon, button, isPokedex}) {
  const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)
  
  const addToPokedex = () => {
    //spread Operator: pega toda a lista, adiciona um novo item à ela
    const indexPokemon = pokemons.findIndex((item) => item.name === pokemon.name)
    const newPokemons = [...pokemons]
    newPokemons.splice(indexPokemon, 1)
    const newPokedex = [...pokedex, pokemon]
    
    //função que vai atualizar o estado da pokedex:
    setPokedex(newPokedex)
    setPokemons(newPokemons)
    alert("Adicionado à pokedex: " + pokemon.name)
  } 

  const removeFromPokedex = () => {
    const indexPokedex = pokedex.findIndex((item) => item.name === pokemon.name)
    const newPokedex = [...pokedex]
    newPokedex.splice(indexPokedex, 1)
    const newPokemons = [...pokemons, pokemon]

    setPokedex(newPokedex)
    setPokemons(newPokemons)
  }
    return (
          <CardPokemon> 
          <Card className="bg-info m-2">
          <Card.Header className="justify-content-center" >
            <Card.Title className="d-flex justify-content-center">
                {pokemon && pokemon.name}
              </Card.Title>
              <Image src={pokemon && pokemon.sprites.front_default} className="mx-auto d-block" />
            </Card.Header>
            <Card.Body className="d-flex justify-content-between">
              { isPokedex && <Button onClick={addToPokedex}>{button}</Button>}
              { !isPokedex && <Button onClick={removeFromPokedex}>{button}</Button>}
              <Link to={`/details/${pokemon.name}`}>
                <Button className="mx-1">Detalhes</Button>
              </Link>
            </Card.Body>
        </Card>
        </CardPokemon>
    )
}

export default PokedexCard