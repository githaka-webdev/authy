'use client';
import { useState } from 'react';
import { NavigationMenuStyles } from '@/styles';
import Image from 'next/image';
import { Button } from '@/components';

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
                    <div
                        className={NavigationMenuStyles.navigation_menu_advert}
                    >
                        <Image
                            src={
                                '/images/global/navigation-menu-advert-star.png'
                            }
                            alt='Navigation Menu Advert Star Image'
                            width={200}
                            height={200}
                        />
                        <div
                            className={
                                NavigationMenuStyles.navigation_menu_advert_body
                            }
                        >
                            <h1>Enjoying Authy?</h1>
                            <p>
                                Please give it a star on GitHub to show your
                                support!
                            </p>
                            <Button
                                name='Rate Now ⭐'
                                link=''
                            />
                        </div>
                    </div>
                </section>
            ) : (
                <></>
            )}
        </main>
    );
}
