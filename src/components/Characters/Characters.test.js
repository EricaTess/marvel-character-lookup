import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters';
import { render, screen, fireEvent } from '@testing-library/react';
import {getCharacters} from './Characters';
import fetch from 'node-fetch';
import { Popover } from 'react-bootstrap';


jest.mock('node-fetch');
const {Response} = jest.requireActual('node-fetch');

beforeAll(() => jest.spyOn(window, 'fetch'))

test('testing api', async () => {

    fetch.mockReturnValue(Promise.resolve(new Response('Thor')));

    const char = await getCharacters();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(char).toBe('Thor')

    screen.debug();
})

const setup = () => {
    const utils = render(<Characters />)
    const input = utils.getByLabelText('input')
    return {
        input,
        ...utils,
    }
}

it("Should add query prefix to user input", async () => {
    jest.clearAllMocks();
    
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'thor' } })
    expect(input.value).toBe('thor')
    screen.debug();
  });
