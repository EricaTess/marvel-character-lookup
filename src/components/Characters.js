import React, { Component } from 'react';
import { Container, Button, CardColumns, InputGroup, FormControl, Row } from 'react-bootstrap';
import { debounce } from "throttle-debounce";
import deadpool from './deadpool.png'
import CharacterCards from './CharacterCards'

export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            query: ''
        }
        //Will fetch characters from API after 200ms
        this.fetchCharacters = debounce(200, this.fetchCharacters);
    }
    
    componentDidMount = () => {
        //render all characters upon initial render
        this.fetchCharacters();
    }

    handleTextInput = (e) => {
        //Set user input (character name) to state
        //if no character name added, show all characters
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
        fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => this.setState({
            characters: data.data.results
        },
        console.log(data.data.results)))
        .catch((err) => {
            console.log('Error:', err);
        }); 
    }

    render() {
        //Add results from API Request to Character Card components
        const validCharacter = this.state.characters;
        let showCharacters = this.state.characters.map(char => {
                return <CharacterCards key={char.id} id={char.id} characters={char} img={char.thumbnail}/>
        });

        return (
            <React.Fragment>
                <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <FormControl
                                className="search-input-box"
                                placeholder="Search Marvel Character"
                                onChange={this.handleTextInput} />
                        </InputGroup>
                    </form>
                </div>
                <Container fluid>
                    <Row>
                        <CardColumns style={{justifyContent: 'center', display: 'contents'}}>
                            {/* If fetch result is empty, return a message */}
                            {validCharacter.length ? showCharacters : <div className='oops-message'>
                                        <p>Move along, Nothing to see here</p>
                                        <img className='oops-deadpool' src={deadpool} />
                                    </div>
                            }
                        </CardColumns>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}