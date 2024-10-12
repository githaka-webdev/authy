import { InputStyles } from '@/styles';
import localFont from 'next/font/local';

const workSans = localFont({
    src: [
        {
            path: '../../../public/fonts/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});

export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
}: InputProps) {
    return (
        <div className={InputStyles.input}>
            <div className={InputStyles.label}>
                <label htmlFor={id}>{label}</label>
            </div>
            <div className={InputStyles.entry}>
                <input
                    className={workSans.className}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </div>
    );
}
