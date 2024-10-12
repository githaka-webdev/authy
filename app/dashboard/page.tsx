import type { Metadata } from 'next';
import {
    Aside,
    Authentication,
    Brand,
    Button,
    Container,
    DashboardContainer,
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
                        name='Dashboard'
                        link='/'
                        active
                    />
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
                <Aside />
                <Main style={MainStyles.main_more}>
                    <></>
                    <Footer />
                </Main>
            </DashboardContainer>
        </div>
    );
}
