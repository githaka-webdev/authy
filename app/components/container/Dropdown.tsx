'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { DropdownStyles } from '@/styles';

export default function Dropdown({
    name,
    icon,
    icon_name,
    children,
}: DropdownProps) {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        if (!menu) {
            document.dispatchEvent(new CustomEvent('dropdownCloseAll'));
        }
        setMenu(!menu);
    }

    useEffect(() => {
        function handleCloseAll() {
            setMenu(false);
        }

        document.addEventListener('dropdownCloseAll', handleCloseAll);

        return () => {
            document.removeEventListener('dropdownCloseAll', handleCloseAll);
        };
    }, []);

    return (
        <div
            className={
                !menu
                    ? DropdownStyles.dropdown
                    : [
                          DropdownStyles.dropdown,
                          DropdownStyles.dropdown_open,
                      ].join(' ')
            }
        >
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
                {menu ? (
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
                <></>
            ) : (
                <div className={DropdownStyles.dropdown_body}>
                    <p>{name}</p>
                    {children}
                </div>
            )}
        </div>
    );
}
