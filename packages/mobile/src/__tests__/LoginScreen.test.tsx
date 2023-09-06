// Login.test.js
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils'; // Import the common utility

import Login from '../screens/Login';

it('Test LOgin Screen', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    // Your test logic for the Login component here
});
