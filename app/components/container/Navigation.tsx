import { NavigationStyles } from '@/styles';
import { NavigationMenu } from '@/components';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={NavigationStyles.navigation}>
            {children}
            <NavigationMenu>{children}</NavigationMenu>
        </nav>
    );
}
