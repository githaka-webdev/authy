import { DashboardContainerStyles } from '@/styles';

export default function DashboardContainer({
    children,
}: DashboardContainerProps) {
    return (
        <div className={DashboardContainerStyles.dashboard_container}>
            {children}
        </div>
    );
}
