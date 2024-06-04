import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-white-300 border-white-700 :bg-white-900 text-black-800 focus:border-blue-500 dark:focus:border-black-600 focus:ring-black-500 dark:focus:ring-black-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
