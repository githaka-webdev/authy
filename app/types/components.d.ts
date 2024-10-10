import { ReactNode } from 'react';

declare global {
    interface ContainerProps {
        children: ReactNode;
    }
}

export {};
