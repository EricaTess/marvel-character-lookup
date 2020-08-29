import React from 'react';
import { 
  render, 
  screen, 
  waitForElementToBeRemoved 
} from '@testing-library/react';
import App from './App';

// window.fetch = jest.fn(() => {
//   const characterName = { name: 'Thor' };

//   return Promise.resolve({
//     json: () => Promise.resolve(characterName),
//   });
// });

describe('Testing App Component', () => {
  test('renders App component', () => {
    render(<App />)
    screen.debug();
    
    expect(screen.getByText('Move along, Nothing to see here')).toBeInTheDocument();
  });
});

// describe('Testing Characters Component', () => {
//   test('renders character name', () => {
    
//   })
// })

 

  // test('character name is rendered', async () => {
  //   render(<App />);
  //   const characterName = await screen.findByText('Thor');
  //   expect(characterName).toBeInTheDocument();
  // });

  // test('error message is shown', async () => {
  //   window.fetch.mockImplementationOnce(() => {
  //     return Promise.reject({ message: 'API is down' });
  //   });

  //   render(<App />);

  //   const errorMessage = await screen.findByText('API is down');
  //   expect(errorMessage).toBeInTheDocument();
  // });
  

