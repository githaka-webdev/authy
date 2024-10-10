import { ContainerStyles } from '@/styles';

export default function Container({ children }: ContainerProps) {
    return <div className={ContainerStyles.container}>{children}</div>;
}
