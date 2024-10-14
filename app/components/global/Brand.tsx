import { Logo } from '@/components';

interface BrandProps {
    name: string;
}

export default function Brand({ name }: BrandProps) {
    return (
        <div>
            <Logo />
            <p>{name}</p>
        </div>
    );
}
