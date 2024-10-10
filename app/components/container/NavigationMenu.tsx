import { NavigationMenuStyles } from '@/styles';

export default function NavigationMenu({ children }: NavigationMenuProps) {
    return (
        <main className={NavigationMenuStyles.navigation_menu}>
            <section></section>
            <section>{children}</section>
        </main>
    );
}
