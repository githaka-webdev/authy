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
                'text-black p-2 border-transparent border hover:border-black hover:bg-gray-50 rounded-xl',
                [active ? 'font-semibold' : ''],
            ].join(' ')}
            href={link}
        >
            {name}
        </Link>
    );
}
