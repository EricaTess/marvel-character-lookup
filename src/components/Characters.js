import React, { Component } from 'react';

export default class Characters extends Component {
  constructor () {
      super();
      this.state = {
        characters: []
      }
  }

  componentDidMount = () => {
      //Get characters from Marvel API
      fetch(process.env.REACT_APP_API_URL)
        .then(res => res.json())
        .then(data => console.log(data))
  }

  render() {
    return (
        <div>
          This is my app in hey..
        </div>
      );
  }
}