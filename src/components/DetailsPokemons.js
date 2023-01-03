import React from 'react'
import { Col, Container, Row, Card, Image } from 'react-bootstrap';

function DetailsPokemons(props) {
    return (
        <Container>
        <Row>
          <Col>
            <Row>
            <Card className="bg-info mt-4 d-flex justify-content-between">
              <Card.Body className="d-flex justify-content-between">
                <Image src="https://picsum.photos/200" className="mx-auto d-block" />
              </Card.Body>
            </Card>
            </Row>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body className="d-flex justify-content-between">
                  <Image src="https://picsum.photos/200" className="mx-auto d-block" />
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body >
                  <Card.Title >
                    {props.namePokemon}
                  </Card.Title>
                  <Card.Text>
                    <strong>hp:</strong> 50 <br/>
                    <strong>ataque:</strong> 50 <br/>
                    <strong>defesa:</strong> 50 <br/>
                    <strong>ataque especial:</strong> 50 <br/>
                    <strong>defesa especial:</strong> 50 <br/>
                    <strong>velocidade</strong> 50 <br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col>
            <Row>
              <Card className="bg-info mt-4 col-7">
                <Card.Header>TIPO</Card.Header>
              </Card>
            </Row>
            <Row>
              <Card className="bg-info mt-4 d-flex justify-content-between">
                <Card.Body >
                  <Card.Title >
                    PRINCIPAIS ATAQUES
                  </Card.Title>
                  <Card.Text>
                    ataque tal <br/>
                    ataque tal <br/>
                    ataque tal <br/>
                    ataque tal <br/>
                    ataque tal <br/>
                    ataque tal <br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    )
}

export default DetailsPokemons