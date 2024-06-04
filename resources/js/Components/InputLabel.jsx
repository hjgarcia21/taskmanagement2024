export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-black-700 dark:text-black-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
