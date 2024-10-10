import { NavigationStyles } from '@/styles';

export default function Navigation({ children }: NavigationProps) {
    return <nav className={NavigationStyles.navigation}>{children}</nav>;
}
