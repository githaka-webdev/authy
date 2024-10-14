import { Logo } from '@/components';

interface BrandProps {
    name: string;
}

export default function Brand({ name }: BrandProps) {
    return (
        <div className='flex flex-row items-center gap-2'>
            <Logo />
            <p className='font-bold text-2xl'>{name}</p>
        </div>
    );
}
