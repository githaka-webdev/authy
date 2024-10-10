'use client';
import { useState } from 'react';
import { NavigationMenuStyles } from '@/styles';
import Image from 'next/image';

export default function NavigationMenu({ children }: NavigationMenuProps) {
    const [menu, openMenu] = useState(false);
    function toggleMenu() {
        openMenu(!menu);
    }
    return (
        <main className={NavigationMenuStyles.navigation_menu}>
            <section
                className={NavigationMenuStyles.navigation_menu_head}
                onClick={toggleMenu}
            >
                {menu ? (
                    <Image
                        src={'./icons/close.svg'}
                        alt='Close Icon'
                        width={25}
                        height={25}
                    />
                ) : (
                    <Image
                        src={'./icons/menu.svg'}
                        alt='Menu Icon'
                        width={25}
                        height={25}
                    />
                )}
            </section>
            {menu ? (
                <section className={NavigationMenuStyles.navigation_menu_body}>
                    {children}
                </section>
            ) : (
                <></>
            )}
        </main>
    );
}
