import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils'; // Import the common utility
import ForgotPassword from '../screens/Guest/ForgotPassword';


it('Tests ForgotPassword Component', () => {
    const { getByTestId } = renderWithProviders(<ForgotPassword />);
    // Your test logic for the Signup component here
});
