import Link from 'next/link';
import { ButtonStyles } from '@/styles';

export default function Button({ link, name }: ButtonProps) {
    return (
        <Link
            className={ButtonStyles.button}
            href={link}
        >
            {name}
        </Link>
    );
}
