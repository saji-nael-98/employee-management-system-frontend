import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import {
    IconAlertCircle,
    IconGitPullRequest
} from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
interface MainLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    to: string
}

function MainLink({ icon, color, label, to }: MainLinkProps) {
    return (
        <UnstyledButton
            to={to}
            component={Link}
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
    { icon: <IconGitPullRequest size="1rem" />, color: 'blue', label: 'Pull Requests', to: '/sadasd' },
    { icon: <IconAlertCircle size="1rem" />, color: 'teal', label: 'Open Issues', to: '/ddd' },
];

export function MainLinks() {
    const links = data.map((link) => <MainLink {...link} key={link.label} />);
    return <div>{links}</div>;
}