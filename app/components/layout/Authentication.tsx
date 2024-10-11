import { AuthenticationStyles } from '@/styles';

export default function Authentication({ children }: AuthenticationProps) {
    return (
        <section id={AuthenticationStyles.authentication}>{children}</section>
    );
}
