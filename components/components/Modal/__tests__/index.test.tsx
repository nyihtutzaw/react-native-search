import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Modal } from '..';

describe('Modal component', () => {
  it('renders correctly when visible', () => {
    const { getByText } = render(
      <Modal
        title="Test Modal"
        isVisible={true}
        hideModal={() => { }}
      />
    );
    expect(getByText('Test Modal')).toBeTruthy();

    expect(getByText('Close')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const { queryByText } = render(
      <Modal
        title="Test Modal"
        isVisible={false}
        hideModal={() => { }}
      />
    );


    expect(queryByText('Test Modal')).toBeNull();

    expect(queryByText('Close')).toBeNull();
  });

  it('calls hideModal when the close button is pressed', () => {
    const hideModalMock = jest.fn();

    const { getByText } = render(
      <Modal
        title="Test Modal"
        isVisible={true}
        hideModal={hideModalMock}
      />
    );

    const closeButton = getByText('Close');

    fireEvent.press(closeButton);

    expect(hideModalMock).toHaveBeenCalled();
  });
});
