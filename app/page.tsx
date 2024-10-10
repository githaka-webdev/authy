import { Container, Footer, Header, Main } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authy - Landing',
};

export default function Landing() {
    return (
        <div className='landing'>
            <Header />
            <Container>
                <Main />
                <Footer />
            </Container>
        </div>
    );
}
