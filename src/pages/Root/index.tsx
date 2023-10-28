import { AppShell } from '@mantine/core';
import React, { useState } from "react";
import { useIsAuthenticated } from 'react-auth-kit';
import { Outlet } from 'react-router-dom';
import { Header, SideNav } from "../../shared";
const RootPage: React.FC = () => {
    const isAuthenticated = useIsAuthenticated()
    const [opend, setOpened] = useState<boolean>(false)
    return (
        <AppShell padding={isAuthenticated() ? 'sm' : 0} aside={<SideNav opend={opend} />} header={<Header opened={opend} setOpened={setOpened} />}>
            <Outlet />
        </AppShell>
    );
};

export const Component = RootPage;