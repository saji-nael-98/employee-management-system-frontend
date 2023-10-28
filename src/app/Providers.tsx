import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { AuthProvider } from 'react-auth-kit'
import { queryClient } from "../utils";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

interface IProps {
    children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme, primaryColor: 'teal' }}>
                <Notifications />
                <QueryClientProvider client={queryClient}>
                    <AuthProvider authName="_auth" authType="cookie">
                        {children}
                    </AuthProvider>
                </QueryClientProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export { Providers };