import { Navigation } from '@/components';
import Brand from '../global/Brand';
import { ReactNode } from 'react';

interface HeaderProps {
    children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <header className='flex flex-row items-center justify-start gap-16 h-16 px-4 w-full sm:px-8 xl:px-16 max-w-screen-2xl'>
            <Brand name='Authy' />
            <Navigation>{children}</Navigation>
        </header>
    );
}
