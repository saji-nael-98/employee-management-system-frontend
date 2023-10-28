import { Navbar } from '@mantine/core'
import { MainLinks, User } from '.'
import { withRequireAuth } from '../../../modules/auth/application'
interface SideNavProps {
    opend: boolean
}
const SideNav: React.FC<SideNavProps> = ({ opend }) => {
    return <Navbar p="xs" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} hidden={opend}>
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