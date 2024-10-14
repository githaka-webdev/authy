import { ReactNode } from 'react';

interface NavigationProps {
    children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className='grow h-full flex flex-row items-center justify-end'>
            {children}
        </nav>
    );
}
