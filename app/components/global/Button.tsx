import Link from 'next/link';

interface ButtonProps {
    link: string;
    name: string;
}

export default function Button({ link, name }: ButtonProps) {
    return (
        <Link
            href={link}
            className='bg-black text-white p-2 rounded-xl font-semibold border-2 border-black hover:border-2 hover:bg-transparent hover:text-black'
        >
            {name}
        </Link>
    );
}
