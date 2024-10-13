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
                <Image
                    src={'/icons/arrow-down.svg'}
                    alt={'Arrow Down Icon'}
                    width={20}
                    height={20}
                />
            </div>
            <div>{children}</div>
        </Link>
    );
}
