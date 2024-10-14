'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Logo() {
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
        <Image
            src={darkMode ? '/logo-light.svg' : '/logo-dark.svg'}
            alt='Emblem'
            width={35}
            height={35}
        />
    );
}
