import { MainStyles } from '@/styles';

export default function Main({ children }: MainProps) {
    return <main className={MainStyles.main}>{children}</main>;
}
