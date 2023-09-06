// Login.test.js
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../utils/test-utils'; // Import the common utility

import Login from '../screens/Login';
import TbManage from '../screens/TBManage/TBQuestion';

it('Test TbManage Screen', () => {
    const { getByTestId } = renderWithProviders(<TbManage />);
    // Your test logic for the Login component here
});
