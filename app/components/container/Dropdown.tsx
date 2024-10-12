import Link from 'next/link';
import Image from 'next/image';

export default function Dropdown({
    link,
    name,
    icon,
    icon_name,
}: DropdownProps) {
    return (
        <Link href={link}>
            <Image
                src={icon}
                alt={icon_name}
                width={30}
                height={30}
            />
            <p>{name}</p>
        </Link>
    );
}
