import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils'; // Import the common utility
import Signup from '../screens/Guest/Signup';

it('Tests Signup', () => {
    const { getByTestId } = renderWithProviders(<Signup />);
    // Your test logic for the Signup component here
});
