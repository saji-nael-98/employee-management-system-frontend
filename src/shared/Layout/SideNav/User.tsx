import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import { UnstyledButton, Group, Avatar, Text, Menu, useMantineTheme, rem, Box } from '@mantine/core';
import { useAuthUser } from 'react-auth-kit'
import { fullName } from '../../../utils';
import { IconLogout } from '@tabler/icons-react';
import { useSignOut } from 'react-auth-kit'
const LogoutMenuItem = () => {
    const signOut = useSignOut()
    const clickHandle = () => signOut()
    return <Menu.Item onClick={clickHandle} icon={<IconLogout size={rem(14)} />} color='red'>
        Sign Out
    </Menu.Item>
}
export function User() {
    const theme = useMantineTheme();
    const authUser = useAuthUser()
    return (
        <Menu
            position="right"
            offset={13}
        >
            <Menu.Target>
                <UnstyledButton
                    sx={{
                        display: 'block',
                        width: '100%',
                        padding: theme.spacing.xs,
                        borderRadius: theme.radius.sm,
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                        '&:hover': {
                            backgroundColor:
                                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            src={authUser().image}
                            radius="xl"
                        />
                        <Box sx={{ flex: 1 }}>
                            <Text size="sm" weight={500}>
                                {fullName(authUser().firstName, authUser().lastName)}
                            </Text>
                            <Text color="dimmed" size="xs">
                                {authUser().email}
                            </Text>
                        </Box>

                        {theme.dir === 'ltr' ? (
                            <IconChevronRight size={rem(18)} />
                        ) : (
                            <IconChevronLeft size={rem(18)} />
                        )}
                    </Group>
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                <LogoutMenuItem />
            </Menu.Dropdown>
        </Menu>
    );
}