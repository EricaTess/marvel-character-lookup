import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCards from './CharacterCards';
import { render, screen } from '@testing-library/react';


xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCards />, div);
});

test('hello world', () => {
    render(<p>Hello world</p>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
});

test('contains all props', () => {
    const char = {
        id: 1,
        thumbnail: {
            path: 'https://pytorch.org/tutorials/_images/cat_superres_with_ort',
            extension: 'jpg'
        },
        name: 'Kitteh'
    } 
    render(<CharacterCards key={char.id} id={char.id} 
        characters={char} 
        img={char.thumbnail}/>);
  
    expect(screen.getByText(/kitteh/i)).toBeInTheDocument();
  });

  