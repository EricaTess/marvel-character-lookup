import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import '../public/styles/CharacterCards.css';

export default class CharacterCards extends Component {

  render() {

    return(
        <Card bg={'dark'} text={'light'} style={{ width: '10rem' }}>
          <Card.Img variant="top" src={this.props.img.path + '.' + this.props.img.extension} />
          <Card.Body>
            <Card.Title>{'dark'}{this.props.characters.name}</Card.Title>
            {/* <Card.Text>
                {this.props.characters.description} {' '}
            </Card.Text> */}
          </Card.Body>
        </Card>    
    )
  }
}