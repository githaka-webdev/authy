import {
    Brand,
    Container,
    Footer,
    Header,
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
                    />
                    <NavigationItem
                        name='Work'
                        link='/'
                    />
                    <NavigationItem
                        name='Pricing'
                        link='/'
                    />
                </Navigation>
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </div>
    );
}
