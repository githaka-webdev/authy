import Link from 'next/link';

interface NavigationItemProps {
    link: string;
    name: string;
}

export default function NavigationItem({ link, name }: NavigationItemProps) {
    return <Link href={link}>{name}</Link>;
}
