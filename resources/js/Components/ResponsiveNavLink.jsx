import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-blue-400 dark:border--600 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/50 focus:text-blue-800 dark:focus:text-blue-200 focus:bg-blue-100 dark:focus:bg-blue-900 focus:border-blue-700 dark:focus:border-blue-300'
                    : 'border-transparent text-blue-600 dark:text-black-400 hover:text-blue-800 dark:hover:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-700 hover:border-blue-300 dark:hover:border-blue-600 focus:text-blue-800 dark:focus:text-blue-200 focus:bg-blue-50 dark:focus:bg-blue-700 focus:border-blue-300 dark:focus:border-blue-600'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
