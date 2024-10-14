'use client';
import { ReactNode } from 'react';
import { Button } from '@/components';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavigationProps {
    children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    const [menu, setMenu] = useState(true);
    function toggleMenu() {
        return setMenu(!menu);
    }
    const [darkMode, isDarkMode] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        isDarkMode(mediaQuery.matches);
        const handleChange = (e: MediaQueryListEvent) => {
            isDarkMode(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);
    return (
        <div className='grow h-full flex flex-row items-center justify-end gap-8'>
            <nav className='hidden sm:flex sm:flex-row sm:items-center sm:justify-end sm:gap-8'>
                {children}
                <Button
                    link=''
                    name='Account'
                />
            </nav>
            <nav className='sm:hidden flex-grow flex flex-row items-center justify-end h-full'>
                <div
                    className='w-full flex flex-row items-center justify-end h-full hover:cursor-pointer'
                    onClick={toggleMenu}
                >
                    {menu ? (
                        <Image
                            src={
                                darkMode
                                    ? '/icons/menu-light.svg'
                                    : '/icons/menu-dark.svg'
                            }
                            alt='Menu Icon'
                            width={24}
                            height={24}
                        />
                    ) : (
                        <Image
                            src={
                                darkMode
                                    ? '/icons/close-light.svg'
                                    : '/icons/close-dark.svg'
                            }
                            alt='Menu Icon'
                            width={24}
                            height={24}
                        />
                    )}
                </div>
                {menu ? (
                    <></>
                ) : (
                    <div className='absolute top-24 flex flex-col right-4 w-2/4 p-4 bottom-0 gap-6 border-l dark:border-neutral-900'>
                        {children}
                        <Button
                            link=''
                            name='Account'
                        />
                    </div>
                )}
            </nav>
        </div>
    );
}
