import { Group, Text, ThemeIcon, UnstyledButton, useMantineTheme } from '@mantine/core';
import {
    IconHome
} from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    to: string
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
    const theme = useMantineTheme()
    return (
        <UnstyledButton
            to={to}
            component={NavLink}
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] : theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                };
            }}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

const data = [
    { icon: <IconHome size="1rem" />, color: 'blue', label: 'Dashboard', to: '/' },
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}