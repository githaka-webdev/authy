'use client';
import localFont from 'next/font/local';
import './globals.css';
import { useState, useEffect } from 'react';

const workSansNormal = localFont({
    src: './fonts/work-sans-normal.ttf',
    style: 'normal',
    variable: '--work-sans-normal',
});
const workSansItalic = localFont({
    src: './fonts/work-sans-italic.ttf',
    style: 'italic',
    variable: '--work-sans-italic',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
        <html lang='en'>
            <head>
                <link
                    rel='shortcut icon'
                    href={darkMode ? '/logo-light.svg' : '/logo-dark.svg'}
                    type='image/x-icon'
                />
            </head>
            <body
                className={`${workSansNormal.variable} ${
                    workSansItalic.variable
                } antialiased ${'w-dvw h-dvh flex flex-col items-center justify-start'}`}
            >
                {children}
            </body>
        </html>
    );
}
