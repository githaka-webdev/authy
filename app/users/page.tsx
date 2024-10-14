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
    title: 'Authy - Users',
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
                        name='Users'
                        icon='/icons/users.svg'
                        icon_name='Dashboard Icon'
                    >
                        <NavigationItem
                            name='Users'
                            link='/users'
                            active
                        />
                        <NavigationItem
                            name='Flagged'
                            link='/users/banned'
                        />
                    </Dropdown>
                </Aside>
                <Main style={MainStyles.main_more}>
                    <Breadcrumbs name='/ Users' />
                </Main>
            </DashboardContainer>
        </div>
    );
}
