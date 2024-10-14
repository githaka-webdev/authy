import type { Metadata } from 'next';
import {
    Aside,
    Authentication,
    Brand,
    Breadcrumbs,
    Button,
    Container,
    DashboardContainer,
    Dropdown,
    Features,
    Footer,
    Form,
    Header,
    Hero,
    Input,
    Main,
    Navigation,
    NavigationItem,
} from '@/components';

import { MainStyles } from '@/styles';

export const metadata: Metadata = {
    title: 'Authy - Dashboard',
};

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        name='Notifications'
                        link='/'
                    />
                    <NavigationItem
                        name='Settings'
                        link='/'
                    />
                    <NavigationItem
                        name='Account'
                        link='/'
                    />
                    <Button
                        name='Logout'
                        link='/login'
                    />
                </Navigation>
            </Header>
            <DashboardContainer>
                <Aside>
                    <Dropdown
                        link=''
                        name='Dashboard'
                        icon='/icons/dashboard.svg'
                        icon_name='Dashboard Icon'
                    >
                        <NavigationItem
                            name='Dashboard'
                            link='/dashboard'
                            active
                        />
                        <NavigationItem
                            name='Analytics'
                            link='/dashboard/analytics'
                        />
                        <NavigationItem
                            name='Threats'
                            link='/dashboard/threats'
                        />
                    </Dropdown>
                    <Dropdown
                        link=''
                        name='Users'
                        icon='/icons/users.svg'
                        icon_name='Analytics Icon'
                    >
                        <NavigationItem
                            name='All Users'
                            link=''
                        />
                        <NavigationItem
                            name='Admins'
                            link=''
                        />
                        <NavigationItem
                            name='Staff'
                            link=''
                        />
                    </Dropdown>
                </Aside>
                <Main style={MainStyles.main_more}>
                    <Breadcrumbs name='/Dashboard' />
                </Main>
            </DashboardContainer>
        </div>
    );
}
