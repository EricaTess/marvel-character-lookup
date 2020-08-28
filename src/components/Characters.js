import React, { Component } from 'react';

import CharacterCards from './CharacterCards'

export default class Characters extends Component {
  constructor () {
      super();
      this.state = {
        characters: [],
        image: null,
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
      this.setState({
          query: '&name=' + e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //Get Marvel Character from user's input
    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => this.setState({
            characters: data.data.results
        },
        console.log(data.data.results)))
        

        //If fetch result is empty, return a message saying 'invalid character'

  }

  render() {

    return (
        <React.Fragment>
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="find-char"
                        onChange={this.handleTextInput}
                        placeholder="Choose your Marvel Character"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {this.state.characters.map(char => {
                return char.name})}
            <CharacterCards characters={this.state.characters}/>
        </React.Fragment>
      );
  }
}