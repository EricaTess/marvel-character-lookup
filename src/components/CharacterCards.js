import React, { Component } from 'react';

export default class CharacterCards extends Component {
  constructor () {
      super();
      this.state = {
      }
  }

  render() {
      console.log('THIS IS IN CARDS', this.props.characters)
      return(
        <React.Fragment>

        </React.Fragment>
      )
  }
}