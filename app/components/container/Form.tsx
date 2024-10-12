import Image from 'next/image';
import { Input } from '@/components';
import { FormStyles } from '@/styles';

export default function Form({ children, type }: FormProps) {
    return (
        <form
            action=''
            className={FormStyles.form}
        >
            <Image
                src={'/logo.svg'}
                alt='Authy Logo'
                width={35}
                height={35}
            />
            {children}
            <Input
                type='submit'
                value={type}
            />
        </form>
    );
}
