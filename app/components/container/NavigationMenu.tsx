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
            <section onClick={toggleMenu}>
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
            {menu ? <section>{children}</section> : <></>}
        </main>
    );
}
