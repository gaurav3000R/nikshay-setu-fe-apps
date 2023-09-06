import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import configureStore from '@tb-frontend/shared/Store/index';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
export function renderWithProviders(ui, { ...renderOptions } = {}) {
    function Wrapper({ children }) {
        return (
            <Provider store={configureStore}>
                <NavigationContainer>{children}</NavigationContainer>
            </Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
