import type { Metadata } from 'next';
import {
    Authentication,
    Brand,
    Button,
    Container,
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

export const metadata: Metadata = {
    title: 'Authy - Dashboard',
};

export default function Dashboard() {
    return (
        <div id='dashboard'>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        name='Landing'
                        link='/'
                        active
                    />
                    <NavigationItem
                        name='Docs'
                        link='/'
                    />
                    <NavigationItem
                        name='Changelog'
                        link='/'
                    />
                    <Button
                        name='Account'
                        link='/login'
                    />
                </Navigation>
            </Header>
            <Container>
                <Main>
                    <Hero />
                    <Features />
                </Main>
                <Footer />
            </Container>
        </div>
    );
}
