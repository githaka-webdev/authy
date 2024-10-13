import Image from 'next/image';
import { DropdownStyles } from '@/styles';

export default function Dropdown({
    name,
    icon,
    icon_name,
    children,
}: DropdownProps) {
    return (
        <div className={DropdownStyles.dropdown}>
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
                    className={DropdownStyles.dropdown_title_arrow_down}
                />
            </div>
            <div className={DropdownStyles.dropdown_body}>{children}</div>
        </div>
    );
}
