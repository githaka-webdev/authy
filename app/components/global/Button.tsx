import Link from 'next/link';

interface ButtonProps {
    link: string;
    name: string;
}

export default function Button({ link, name }: ButtonProps) {
    return (
        <Link
            href={link}
            className='bg-black dark:bg-white dark:text-black text-white p-3 rounded-2xl font-semibold border-2 border-black hover:border-2 dark:hover:border-white hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white'
        >
            {name}
        </Link>
    );
}
