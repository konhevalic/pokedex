import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Pokedex from '../pages/Pokedex/index'
import PokemonDetails from '../pages/PokemonDetails/index'
import PokemonsList from '../pages/PokemonsList/index'

function Routes(){
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PokemonsList />
        </Route>
        <Route exact path="/details/:namePokemon">
          <PokemonDetails/>
        </Route>
        <Route exact path="/pokedex">
          <Pokedex  />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes