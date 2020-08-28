import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class CharacterCards extends Component {
  constructor () {
      super();
      this.state = {
      }
  }

  render() {
    //   console.log('THIS IS IN CARDS', this.props.characters)
      return(
        <React.Fragment>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.img.path + '.' + this.props.img.extension} />
                <Card.Body>
                    <Card.Title>{this.props.characters.name}</Card.Title>
                    <Card.Text>
                        {this.props.characters.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment>
      )
  }
}