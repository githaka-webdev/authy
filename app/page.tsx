import {
    Brand,
    Container,
    Footer,
    Header,
    Main,
    Navigation,
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
                    <></>
                </Navigation>
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </div>
    );
}
