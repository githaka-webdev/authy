import Link from 'next/link';
import { NavigationItemStyles } from '@/styles';

export default function NavigationItem({
    link,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={active ? '' : NavigationItemStyles.navigation_item}
            href={link}
        >
            {name}
        </Link>
    );
}
