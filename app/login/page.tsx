import {
    Authentication,
    Brand,
    Button,
    Container,
    Features,
    Footer,
    Header,
    Hero,
    Main,
    Navigation,
    NavigationItem,
} from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authy - Login',
};

export default function Login() {
    return (
        <div className='login'>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        name='Landing'
                        link='/'
                    />
                    <NavigationItem
                        name='Login'
                        link='/login'
                        active
                    />
                    <NavigationItem
                        name='Register'
                        link='/'
                    />
                    <NavigationItem
                        name='Reset'
                        link='/'
                    />
                    <Button
                        name='Support'
                        link='/login'
                    />
                </Navigation>
            </Header>
            <Container>
                <Main>
                    <Authentication />
                </Main>
                <Footer />
            </Container>
        </div>
    );
}
