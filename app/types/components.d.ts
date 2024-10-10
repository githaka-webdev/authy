import { ReactNode } from 'react';

declare global {
    interface ContainerProps {
        children: ReactNode;
    }
    interface HeaderProps {
        children: ReactNode;
    }
    interface NavigationProps {
        children: ReactNode;
    }
    interface NavigationItemProps {
        link: string;
        name: string;
        active?: boolean;
    }
    interface ButtonProps {
        link: string;
        name: string;
    }
}

export {};
