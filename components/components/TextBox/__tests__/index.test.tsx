import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TextBox } from '..';

describe('TextBox', () => {
  it('renders TextInput component', () => {
    const { getByTestId } = render(<TextBox />);
    const textInputElement = getByTestId('RNE__Input__text-input');
    expect(textInputElement).toBeTruthy();
  });
  it('triggers onChange callback when text is entered', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<TextBox onChange={handleChange} />);
    const inputElement = getByTestId('RNE__Input__text-input');

    const testText = 'Test text';
    fireEvent.changeText(inputElement, testText);

    expect(handleChange).toHaveBeenCalledWith(testText);
  });
});
