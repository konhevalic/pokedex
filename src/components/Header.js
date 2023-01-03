import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Navbar } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {goToHomePage, goToPokedex} from '../routes/Coordinator'

function Header(props) {
    const history = useHistory()
    return (
        <Navbar className="bg-primary col-12 ">
            <div class="container mx-0 d-flex justify-content-between col-12">
                <div class="row col-12 d-flex justify-content-center align-items-center">
                    <div class="col d-flex justify-content-left">
                    {
                        !props.pokedex && props.isDetails &&
                        <Link to={`/`}>
                            <Button className="mx-1">Página Inicial</Button>
                        </Link>
                    }
                    
                    {
                        props.pokedex && !props.isDetails &&
                        <Link to={`/`}>
                            <Button className="mx-1">Lista Pokemons</Button>
                        </Link>
                        
                    }
                    
                    </div>
                    <div class="col ">
                    <h1 className="d-flex justify-content-center">{props.page}</h1>
                    </div>
                    <div class="col d-flex justify-content-end">
                    {
                        !props.pokedex && !props.details &&
                    <Link to={`/pokedex`}>
                        <Button  className="mx-1"> Ver Pokedex</Button>
                    </Link>
                    }
                    </div>
                </div>
            </div>
            
            
            
            
            
        </Navbar>
    )
}

export default Header

    