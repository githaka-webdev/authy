import { ReactNode } from 'react';
import { Button } from '@/components';

interface NavigationProps {
    children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    return (
        <div className='grow h-full flex flex-row items-center justify-end gap-8'>
            <nav className='flex flex-row items-center justify-end gap-8'>
                {children}
                <Button
                    link=''
                    name='Account'
                />
            </nav>
        </div>
    );
}
