export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
}: InputProps) {
    return (
        <div>
            <div>
                <label htmlFor={id}>{label}</label>
            </div>
            <div>
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
