import { ReactNode } from 'react';

declare global {
    interface ContainerProps {
        children: ReactNode;
    }
    interface HeaderProps {
        children: ReactNode;
    }
}

export {};
