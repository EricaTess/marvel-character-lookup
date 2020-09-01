import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters';
import { render, screen, fireEvent } from '@testing-library/react';
import {getCharacters} from './Characters';


jest.mock('node-fetch');
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');

beforeAll(() => jest.spyOn(window, 'fetch'))

test('testing api', async () => {

    fetch.mockReturnValue(Promise.resolve(new Response('Thor')));

    const char = await getCharacters();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(char).toBe('Thor')

    screen.debug();
})


//find the text input
//send keys to fetch request ~fire event key down
//assert fetch was called ~


