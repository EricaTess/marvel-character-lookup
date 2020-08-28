import React, { Component } from 'react';

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
      //Get characters from Marvel API
      fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => console.log(data))
  }

  handleTextInput = (e) => {

      this.setState({
          query: '&name=' + e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=' + process.env.REACT_APP_API_KEY + this.state.query)
        .then(res =>  res.json())
        .then(data => console.log(data))
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
        </React.Fragment>
      );
  }
}