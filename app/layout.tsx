import localFont from 'next/font/local';
import './globals.css';

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
    return (
        <html lang='en'>
            <body
                className={`${workSansNormal.variable} ${
                    workSansItalic.variable
                } antialiased ${'w-dvw h-dvh'}`}
            >
                {children}
            </body>
        </html>
    );
}
