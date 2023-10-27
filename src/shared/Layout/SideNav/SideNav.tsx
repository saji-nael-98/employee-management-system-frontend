import { Navbar } from '@mantine/core'
import { MainLinks, User } from '.'
import { withRequireAuth } from '../../../modules/auth/application'

const SideNav: React.FC = () => {
    return <Navbar bg={'dark.6'} p="xs" width={{ base: 300 }}>
        <Navbar.Section mt="xs">
            {/* brand */}
        </Navbar.Section>
        <Navbar.Section grow>
            <MainLinks />
        </Navbar.Section>
        <Navbar.Section>
            <User />
        </Navbar.Section>
    </Navbar>
}
const Component = withRequireAuth(SideNav)
export { Component as SideNav }