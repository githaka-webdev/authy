import { MainStyles } from '@/styles';

export default function Main({ children, style }: MainProps) {
    return (
        <main className={[MainStyles.main, style].join(' ')}>{children}</main>
    );
}
