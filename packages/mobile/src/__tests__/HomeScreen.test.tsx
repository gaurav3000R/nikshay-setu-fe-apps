// Login.test.js
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils'; // Import the common utility

import HomeScreenV2 from '../screens/HomeScreen';

it('Test HomeScreenV2', () => {
    const { getByTestId } = renderWithProviders(<HomeScreenV2 />);
    // Your test logic for the Login component here
});
