import Link from 'next/link';
import Image from 'next/image';

export default function Dropdown({ link, name }: DropdownProps) {
    return (
        <Link href={link}>
            <Image
                src={}
                alt={}
                width={30}
                height={30}
            />
            <p>{name}</p>
        </Link>
    );
}
