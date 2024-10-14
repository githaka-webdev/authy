import { Header, NavigationItem } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authy',
};

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    link='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    link='/'
                    name='Changelog'
                />
            </Header>
        </>
    );
}
