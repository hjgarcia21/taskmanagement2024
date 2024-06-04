import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput(
    { className = "", children, ...props }, 
    ref
) {
    const input = ref ? ref : useRef();

    return (
        <select
            {...props}
            className={
                'border-white-600 border-white-700 bg-blue-200 text-black-300 focus:border-black-500 focus:border-blue-600 focus:ring-blue-500 focus:ring-blue-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
         
            >
                   {children}
        </select>
    );
});
