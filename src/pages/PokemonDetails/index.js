import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import GlobalStateContext from '../../global/GlobalStateContext';


function PokemonDetails() {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const {namePokemon} = useParams()
  const {pokemons, pokemonName} = useContext(GlobalStateContext)

  
  console.log('selectedPokemon ' + pokemonName)
    
    useEffect(() => {
      const pokemonAtual = pokemons.find((item) => {return item.name === namePokemon})
      setSelectedPokemon(pokemonAtual)
    }, [] )
  
   return (
    <div>
      <Header page={'DETALHES'} button={'IR PARA LISTA DE POKEMONS'} isDetails={true}/>
      <Container>
        <Row>
          <Col>
            <Row>
            <Card className="bg-info mt-4 d-flex justify-content-between">
              <Card.Body className="d-flex justify-content-between">
                <Image src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default} className="mx-auto d-block" />
              </Card.Body>
            </Card>
            </Row>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body className="d-flex justify-content-between">
                <Image src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default} className="mx-auto d-block" />
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body >
                  <Card.Title >
                    {namePokemon}
                  </Card.Title>
                  <Card.Text>
                    {
                      selectedPokemon &&
                      selectedPokemon.stats &&
                      selectedPokemon.stats.map((stat) => {
                        return (
                          <p key={stat.stat.name}>
                            <strong>{stat.stat.name}:</strong> {stat.base_stat}
                            </p>
                        )
                      })
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card className="bg-info mt-4 col-7">
                <Card.Header>
                  {
                    selectedPokemon &&
                    selectedPokemon.types && 
                    selectedPokemon.types.map((type) => {
                      return (
                        <span key={type.type.name} className="ml-3">
                          {type.type.name}
                        </span>
                      )
                    })
                  }
                </Card.Header>
              </Card>
            </Row>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body >
                  <Card.Title >
                    PRINCIPAIS ATAQUES
                  </Card.Title>
                  <Card.Text>
                    {
                      selectedPokemon &&
                      selectedPokemon.moves &&
                      selectedPokemon.moves.map((move) => {
                        return (
                          <p key={move.move.name}>
                            {move.move.name}
                          </p>
                        )
                      })
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PokemonDetails;
