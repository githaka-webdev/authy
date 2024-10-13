'use client';
import { useState } from 'react';
import Image from 'next/image';
import { DropdownStyles } from '@/styles';

export default function Dropdown({
    name,
    icon,
    icon_name,
    children,
}: DropdownProps) {
    const [menu, setMenu] = useState(true);
    function toggleMenu() {
        setMenu(!menu);
    }
    return (
        <div className={DropdownStyles.dropdown}>
            <div
                className={DropdownStyles.dropdown_title}
                onClick={toggleMenu}
            >
                <Image
                    src={icon}
                    alt={icon_name}
                    width={25}
                    height={25}
                />
                <p>{name}</p>

                {!menu ? (
                    <Image
                        src={'/icons/arrow-up.svg'}
                        alt={'Arrow Up Icon'}
                        width={15}
                        height={15}
                        className={DropdownStyles.dropdown_title_arrow_down}
                    />
                ) : (
                    <Image
                        src={'/icons/arrow-down.svg'}
                        alt={'Arrow Down Icon'}
                        width={15}
                        height={15}
                        className={DropdownStyles.dropdown_title_arrow_down}
                    />
                )}
            </div>
            {!menu ? (
                <div className={DropdownStyles.dropdown_body}>
                    <p>{name}</p>
                    {children}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
