import Link from 'next/link';
import { NavigationItemStyles } from '@/styles';

export default function NavigationItem({
    link,
    name,
    status,
}: NavigationItemProps) {
    return (
        <Link
            className={status ? '' : NavigationItemStyles.navigation_item}
            href={link}
        >
            {name}
        </Link>
    );
}
