import Link from 'next/link';
import Image from 'next/image';
import { DropdownStyles } from '@/styles';

export default function Dropdown({
    link,
    name,
    icon,
    icon_name,
    children,
}: DropdownProps) {
    return (
        <Link
            href={link}
            className={DropdownStyles.dropdown}
        >
            <div>
                <Image
                    src={icon}
                    alt={icon_name}
                    width={30}
                    height={30}
                />
                <p>{name}</p>
            </div>
            <div>{children}</div>
        </Link>
    );
}
