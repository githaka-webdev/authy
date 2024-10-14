import Link from 'next/link';

interface ButtonProps {
    link: string;
    name: string;
}

export default function Button({ link, name }: ButtonProps) {
    return <Link href={link}>{name}</Link>;
}
