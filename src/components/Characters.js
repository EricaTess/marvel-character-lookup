import React, { Component } from 'react';
import { Container, Button, CardColumns, InputGroup, FormControl, Row } from 'react-bootstrap';
import deadpool from './deadpool.png'
import CharacterCards from './CharacterCards'

export default class Characters extends Component {
  constructor () {
      super();
      this.state = {
        characters: [],
        query: ''
      }
  }

  componentDidMount = () => {
      //Get 20 characters from Marvel API
      fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => this.setState({
            characters: data.data.results
        },
        console.log(data.data.results)))
        
  }

  //Set user input (character name) to state
  handleTextInput = (e) => {
      //if no character name added, show all characters
      if (e.target.value === '') {
          this.setState({
              query: ''
          })
      } else {
        this.setState({
            query: '&name=' + e.target.value
        })
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //Add Marvel Character input to API Request
    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => this.setState({
            characters: data.data.results
        },
        console.log(data.data.results)))
        .catch(err => {
            console.log('Error fetching and parsing data', err)
        })
  }

  render() {

    //Add results from API Request to Character Card components
    const validCharacter = this.state.characters;
    let showCharacters;
    let noCharacters;
    //If fetch result is empty, return a message
    if (validCharacter.length !== 0) {
        showCharacters = this.state.characters.map(char => {
            return <CharacterCards key={char.id} id={char.id} characters={char} img={char.thumbnail}/>})
    } else {
        noCharacters = <p>Move along, Nothing to see here</p>
    }
    
    return (
        <React.Fragment>
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl
                            className="search-input-box"
                            placeholder="Search Marvel Character"
                            onChange={this.handleTextInput} />
                        <InputGroup.Append>
                            <Button className="submit-button" type="submit">Submit</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </div>
            <Container fluid>
                <Row>
                    <CardColumns style={{justifyContent: 'center', display: 'contents'}}>
                        {showCharacters}
                    </CardColumns>
                    <div className='oops-message'>
                      {noCharacters}
                      <img className='oops-deadpool' src={deadpool} />
                    </div>
                </Row>
            </Container>
        </React.Fragment>
      );
  }
}