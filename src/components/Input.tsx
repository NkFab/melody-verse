import React from 'react'


type InputProps = {
    [x: string]: unknown
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
    return (
        <input
            {...rest}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
    )
}

export default Input