export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-black-900 border-black-300 dark:border-black-700 text-indigo-900 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-black-800 ' +
                className
            }
        />
    );
}
