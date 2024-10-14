import { Header } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authy',
};

export default function Landing() {
    return (
        <>
            <Header />
        </>
    );
}
