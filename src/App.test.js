// Dependencies
import React from 'react';
import { 
  render, 
  screen, 
  waitForElementToBeRemoved ,
  fireEvent
} from '@testing-library/react';

// Components
import App from './App';
import Characters from './components/Characters';
import handleTextInput from './components/Characters';



describe('Testing App Component', () => {
  test('should render App component', () => {
    render(<App />)
    screen.debug();
    
    expect(screen.getByText('Move along, Nothing to see here')).toBeInTheDocument();
  });
});

// describe('Testing Characters Component', () => {
//   test('should render character name', () => {
//     render(<Characters />)
//     screen.debug();

//     expect(screen.getByText('Thor')).toBeInTheDocument();
//   });
// });

// test('should add character name to API call', () => {
//   expect(handleTextInput('Thor')).toBe('&name=Thor')
// })


// window.fetch = jest.fn(() => {
//   const characterName = { name: 'Thor' };

//   return Promise.resolve({
//     json: () => Promise.resolve(characterName),
//   });
// });



//   test('character name is rendered', async () => {
//     render(<Characters />);
//     const name = await screen.findByText('Thor');
//     expect(name).toBeInTheDocument();
//   });

//   test('error message is shown', async () => {
//     window.fetch.mockImplementationOnce(() => {
//       return Promise.reject({ message: 'API is down' });
//     });

//     render(<Characters />);

//     const errorMessage = await screen.findByText('API is down');
//     expect(errorMessage).toBeInTheDocument();
//   });
  

