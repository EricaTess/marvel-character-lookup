import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class CharacterCards extends Component {
    constructor() {
        super();
        this.state = {
            showDescription: false
        }
    }

    render() {

        return(
            <Card className='cards' bg={'dark'} text={'light'} style={{ width: '10rem' }}>
                <Card.Img variant="top" src={this.props.img.path + '.' + this.props.img.extension} />
                <Card.Body id={this.props.id}
                    onMouseEnter={() => this.setState({showDescription: true})}
                    onMouseLeave={() => this.setState({showDescription: false})}>
                    <Card.Title>{this.props.characters.name}</Card.Title>
                    <Card.Text>
                        <div className='char-description'>{this.state.showDescription && (this.props.characters.description)}</div>
                    </Card.Text>
                </Card.Body>
            </Card>    
        )
    }
}