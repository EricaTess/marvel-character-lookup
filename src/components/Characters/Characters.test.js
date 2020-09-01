import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters';
import { render, screen } from '@testing-library/react';



it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Characters />, div);
});


beforeAll(() => jest.spyOn(window, 'fetch'))

test('testing api', async () => {

    window.fetch.mockReturnValue({
        data: {
            data: []
        }
    });

    render(<Characters />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
})


// window.fetch = jest.fn(() => {
//     const characterName = {
//         id: 1,
//         thumbnail: {
//             path: 'https://pytorch.org/tutorials/_images/cat_superres_with_ort',
//             extension: 'jpg'
//         },
//         name: 'Kitteh'
//     };
  
//     return Promise.resolve({
//       json: () => Promise.resolve({
//           data: {
//               data: characterName
//           }
//       }),
//     });
//   });


