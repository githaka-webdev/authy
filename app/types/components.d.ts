import { Children, ReactNode } from 'react';

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
        style?: string;
    }
    interface AuthenticationProps {
        children: ReactNode;
    }
    interface InputProps {
        label?: string;
        id?: string;
        type: string;
        placeholder?: string;
        value?: string;
    }
    interface FormProps {
        children: ReactNode;
        type: string;
    }
    interface DashboardContainerProps {
        children: ReactNode;
    }
}

export {};
