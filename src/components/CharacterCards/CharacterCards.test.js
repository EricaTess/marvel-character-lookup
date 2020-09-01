import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCards from './CharacterCards';
import { render, screen } from '@testing-library/react';


xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCards />, div);
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
    // screen.debug();
  });


 
  

// test('character name is rendered', async () => {
//     render(<CharacterCards />);
//     const name = await screen.getByText(/kitteh/i);
//     expect(name).toBeInTheDocument();
//     screen.debug();
// });


  