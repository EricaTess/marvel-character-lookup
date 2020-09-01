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


describe('Testing App Component', () => {
  test('should render App component', () => {
    render(<App />)
    // screen.debug();
    
    expect(screen.getByText('Marvel Character Search')).toBeInTheDocument();
  });
});




  

