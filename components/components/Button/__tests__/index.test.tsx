import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '..';

describe('Button', () => {
  it('renders Button component', () => {
    const { getByTestId } = render(<Button title="text" />);
    const buttonElement = getByTestId('button');
    expect(buttonElement).toBeTruthy();
  });
});
