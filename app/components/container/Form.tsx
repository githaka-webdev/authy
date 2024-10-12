import Image from 'next/image';
import { Input } from '@/components';

export default function Form({ children }: FormProps) {
    return (
        <form action=''>
            <Image
                src={'/logo.svg'}
                alt='Authy Logo'
                width={35}
                height={35}
            />
            {children}
            <Input
                type='submit'
                value=''
            />
        </form>
    );
}
