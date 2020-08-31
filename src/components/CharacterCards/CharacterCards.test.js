import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCards from './CharacterCards';


xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCards />, div);
});