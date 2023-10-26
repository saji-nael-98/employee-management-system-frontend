import React from "react";
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core';
import { useIsAuthenticated } from 'react-auth-kit'
const RootPage: React.FC = () => {
    const isAuthenticated = useIsAuthenticated()
    return (
        <AppShell padding={isAuthenticated() ? 'sm' : 0}>
            <Outlet />
        </AppShell>
    );
};

export const Component = RootPage;