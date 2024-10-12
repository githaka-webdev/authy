import Link from 'next/link';
import Image from 'next/image';
import { DropdownStyles } from '@/styles';

export default function Dropdown({
    link,
    name,
    icon,
    icon_name,
}: DropdownProps) {
    return (
        <Link
            href={link}
            className={DropdownStyles.dropdown}
        >
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
