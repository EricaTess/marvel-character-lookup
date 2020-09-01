import React, { Component } from 'react';
import { Container, CardColumns, InputGroup, FormControl, Row } from 'react-bootstrap';
import { debounce } from "throttle-debounce";
import './Characters.css';
import deadpool from './deadpool.png';
import fetch from 'node-fetch';

// Component imports
import CharacterCards from '../CharacterCards/CharacterCards'


export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: null,
            query: '',
            invalidCharacter: false
        }
        //Will fetch characters from API after 300ms
        this.fetchCharacters = debounce(500, this.fetchCharacters);
    }
    
    componentDidMount = () => {
        //render all characters upon initial render
        this.fetchCharacters();
    }

    handleTextInput = (e) => {
        //Set user input (character name) to state
        //if user input is empty, show all characters by clearing query
        if (e.target.value === '') {
            this.setState({
                query: ''
            })
        } else {
            this.setState({
                query: '&nameStartsWith=' + e.target.value
            })
        }

        this.fetchCharacters();
    }

    fetchCharacters = () => {
        //Fetch characters from API by user input
        fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' 
                + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => this.setState({
            characters: data.data.results
            },
            console.log(data.data.results))  
        );
    }

    showCharacter = () => {
        
        if (this.state.characters === null) {
            return (<div>
                        <p>Loading...</p>
                    </div>);
        } else if (this.state.characters.length === 0) {
            console.log(this.state.characters === [])
            return (<div className='oops-message'>
                                <p>Move along, Nothing to see here</p>
                                <img src={deadpool} alt={'Nothing to see here'}/>
                            </div>)  
        } else if (this.state.characters.length > 0) {
            return this.state.characters.map(char => {
                return <CharacterCards key={char.id} id={char.id} 
                                       characters={char} 
                                       img={char.thumbnail}/>
            })
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <FormControl
                                className="search-input-box"
                                placeholder="Search"
                                onChange={this.handleTextInput} />
                        </InputGroup>
                    </form>
                </div>
                <Container fluid>
                    <Row>
                        <CardColumns style={{justifyContent: 'center', display: 'contents'}}>
                            {/* Display character cards */}
                            {/* If there are no valid characters, display oops message */}
                            {this.showCharacter()}
                        </CardColumns>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

//For testing fetch request
export const getCharacters = async () => {
    const response = await fetch('https://gateway.marvel.com:443/v1/public/characters');
    const charName = await response.text();
    return charName;
}