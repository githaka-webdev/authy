import {
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
    title: 'Authy - Landing',
};

export default function Landing() {
    return (
        <div className='landing'>
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
