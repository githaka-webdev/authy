import { InputStyles } from '@/styles';

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
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </div>
    );
}
