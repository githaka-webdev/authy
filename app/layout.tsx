import './globals.css';
import localFont from 'next/font/local';

const workSans = localFont({
    src: [
        {
            path: '../public/fonts/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../public/fonts/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
