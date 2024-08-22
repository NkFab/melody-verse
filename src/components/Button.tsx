import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
    return (
        <button
            className={`mt-5 tracking-wide font-semibold  w-full py-4 rounded-lg flex items-center justify-center focus:shadow-outline focus:outline-none ${disabled ? 'bg-indigo-300 text-gray-200 hover:none cursor-none' : 'bg-indigo-500 text-gray-100  hover:bg-indigo-700 transition-all duration-300 ease-in-out'}`} disabled={disabled}>
            <span className="ml-3">
                {children}
            </span>
        </button>
    )
}
export default Button