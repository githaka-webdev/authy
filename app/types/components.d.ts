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
    interface NavigationMenuProps {
        children: ReactNode;
    }
    interface MainProps {
        children: ReactNode;
    }
    interface AuthenticationProps {
        children: ReactNode;
    }
}

export {};
