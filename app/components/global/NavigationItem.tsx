import Link from 'next/link';

interface NavigationItemProps {
    link: string;
    name: string;
    active?: boolean;
}

export default function NavigationItem({
    link,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            className={[
                'text-black p-4 border-transparent dark:text-white border hover:border-black dark:hover:border-white rounded-2xl',
                [active ? 'font-semibold' : ''],
            ].join(' ')}
            href={link}
        >
            {name}
        </Link>
    );
}
