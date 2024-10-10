import Link from 'next/link';
import { NavigationItemStyles } from '@/styles';

export default function NavigationItem({ link, name }: NavigationItemProps) {
    return (
        <Link
            className={NavigationItemStyles.navigation_item}
            href={link}
        >
            {name}
        </Link>
    );
}
