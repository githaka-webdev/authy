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
            <div className={DropdownStyles.dropdown_title}>
                <Image
                    src={icon}
                    alt={icon_name}
                    width={25}
                    height={25}
                />
                <p>{name}</p>
                <Image
                    src={'/icons/arrow-down.svg'}
                    alt={'Arrow Down Icon'}
                    width={15}
                    height={15}
                />
            </div>
            <div className={DropdownStyles.dropdown_body}>{children}</div>
        </Link>
    );
}
