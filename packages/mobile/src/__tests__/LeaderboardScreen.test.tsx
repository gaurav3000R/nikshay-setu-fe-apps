// Login.test.js
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils';
import Leaderboard from '../screens/Leaderboard/Leaderboard';

it('Test HomeScreenV2', () => {
    const { getByTestId } = renderWithProviders(<Leaderboard />);
    // Your test logic for the Login component here
});
