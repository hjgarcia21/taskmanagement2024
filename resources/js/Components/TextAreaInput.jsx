import { children, forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextAreaInput({className = '', isFocused = false, children, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                'border-white-300 dark:border-white-700 dark:bg-white-900 dark:text-black-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >{children}
            </textarea>
    );
});
