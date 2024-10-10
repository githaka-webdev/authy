import { NavigationStyles } from '@/styles';
import { NavigationMenu } from '@/components';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={NavigationStyles.navigation}>
            <div className={NavigationStyles.navigation_normal}>{children}</div>
            <NavigationMenu>{children}</NavigationMenu>
        </nav>
    );
}
