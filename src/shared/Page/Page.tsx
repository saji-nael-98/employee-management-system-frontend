import { ActionIcon, Breadcrumbs, Group, Text } from '@mantine/core'
import { IconHome } from '@tabler/icons-react'
import React from 'react'
import { Link, To } from 'react-router-dom'
interface PageProps {
    children: React.ReactNode
    links: (LabelPageLink | IconPageLink)[];
}
type PageLinkTypes = 'icon' | 'label'
interface PageLink {
    type: PageLinkTypes
    link?: To;
}
interface IconPageLink extends PageLink {
    type: 'icon'
    icon: React.ReactNode;
}
interface LabelPageLink extends PageLink {
    type: 'label'
    label: string;
}
interface PageBreadcrumbsProps {
    links: (LabelPageLink | IconPageLink)[];
}
const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({ links }) => {
    const items = links.map((link: IconPageLink | LabelPageLink) => {
        if (link.type == 'icon' && link.link) {
            return (
                <ActionIcon size='sm' component={Link} to={link.link}>
                    {link.icon}
                </ActionIcon>
            )
        }
        else if (link.type == 'label') {
            if (link.link) {
                return (
                    <Text component={Link} size='sm' to={link.link}>
                        {link.label}
                    </Text>
                )
            }
            return (
                <Text size='sm'>
                    {link.label}
                </Text>
            )
        }
    });
    return (
        <Group position='apart'>
            <Text fw={700}>
                {(links[links.length - 1] as LabelPageLink).label}
            </Text>
            <Breadcrumbs separator="→" my="xs">
                {items}
            </Breadcrumbs>
        </Group>
    )
}
const Page: React.FC<PageProps> = ({ children, links }) => {
    links.unshift({ type: 'icon', link: '/', icon: <IconHome /> })
    return (
        <>
            <PageBreadcrumbs links={links} />
            {children}
        </>
    )
}
export { Page }

