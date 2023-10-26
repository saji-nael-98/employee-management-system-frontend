import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { AuthProvider } from 'react-auth-kit'
import { queryClient } from "../utils";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

interface IProps {
    children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: 'dark', primaryColor: 'teal' }}>
            <Notifications />
            <QueryClientProvider client={queryClient}>
                <AuthProvider authName="_auth" authType="cookie">
                    {children}
                </AuthProvider>
            </QueryClientProvider>
        </MantineProvider>
    );
};

export { Providers };