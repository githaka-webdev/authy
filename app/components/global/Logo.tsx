import Image from 'next/image';

export default function Logo() {
    return (
        <Image
            src={'/logo.svg'}
            alt='Emblem'
            width={35}
            height={35}
        />
    );
}
