import { ActionIcon, Burger, Group, Header as MantineHeader, MediaQuery, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import React from 'react';
import { withRequireAuth } from '../../../modules/auth/application';
interface HeaderProps {
    opened: boolean
    setOpened: (value: any) => void
}
const Header: React.FC<HeaderProps> = ({ setOpened, opened }) => {
    const theme = useMantineTheme()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <MantineHeader height={{ base: 50, md: 70 }} p="md">
            <Group sx={{ height: '100%' }} px={20} position="apart">
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={!opened}
                        onClick={() => setOpened((o: boolean) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                    {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
                </ActionIcon>
            </Group>
        </MantineHeader>
    )
}
const Component = withRequireAuth(Header)
export { Component as Header };

