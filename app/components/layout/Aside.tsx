import { AsideStyles } from '@/styles';

export default function Aside({ children }: AsideProps) {
    return <aside className={AsideStyles.aside}>{children}</aside>;
}
