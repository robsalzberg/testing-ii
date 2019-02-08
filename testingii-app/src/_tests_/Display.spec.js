import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from '../components/Display.js';

describe('<Display /> tests', () => {
    it('should display balls and strikes', () => {
        const { getByText } = render(<Display />);
        
        getByText(/Balls:/i);
        getByText(/Strikes:/i);
        
    });

    it('should display balls and strikes set to 0 when press the hit button', () => {
        const { getByText, getByTestId } = render(<Display />);

        getByText(/Balls:/i);
        getByText(/Strikes:/i);
        const hitBtn = getByTestId('hit-btn');

        fireEvent.click(hitBtn);
    })
});