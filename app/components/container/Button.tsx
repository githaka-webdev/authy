import Link from 'next/link';

export default function Button({ link, name }: ButtonProps) {
    return (
        <div>
            <Link href={link}>{name}</Link>
        </div>
    );
}
