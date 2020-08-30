import React, { Component } from 'react';
import { Container, CardColumns, InputGroup, FormControl, Row } from 'react-bootstrap';
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
        //Will fetch characters from API after 300ms
        this.fetchCharacters = debounce(300, this.fetchCharacters);
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
        console.log(data.data.results)))
        .catch((err) => {
            console.log('Error:', err);
        }); 
    }

    hasCharacters = () => {
        return this.state.characters.length
    }

    render() {

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
                            {/* Display character cards */}
                            {/* If there are no valid characters, display oops message */}
                            {this.hasCharacters() ?
                                this.state.characters.map(char => {
                                    return <CharacterCards key={char.id} id={char.id} 
                                                           characters={char} 
                                                           img={char.thumbnail}/>
                                }) : <div className='oops-message'>
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