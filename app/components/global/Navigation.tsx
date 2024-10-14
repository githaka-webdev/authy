'use client';
import { ReactNode } from 'react';
import { Button } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
    children: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    const [menu, setMenu] = useState(true);
    function toggleMenu() {
        return setMenu(!menu);
    }
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
                            src={'/icons/menu.svg'}
                            alt='Menu Icon'
                            width={20}
                            height={20}
                        />
                    ) : (
                        <Image
                            src={'/icons/close.svg'}
                            alt='Close Icon'
                            width={20}
                            height={20}
                        />
                    )}
                </div>
                {menu ? (
                    <></>
                ) : (
                    <div className='absolute top-24 flex flex-col right-4 w-2/4 p-4 bottom-0 gap-6 border-l'>
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
