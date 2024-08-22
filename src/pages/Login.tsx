import React from 'react'
import BackDrop from '../assets/backdrop.svg'
import MelodyVerse from '../assets/melody-verse.svg'
import ConnectVerse from '../assets/connectverse-logo.svg'

const Login: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center" style={{ backgroundImage: `url(${BackDrop})` }}>

            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={ConnectVerse}
                            className=" w-52 mx-auto" />
                    </div>
                    <div className=" mt-32 flex flex-col items-center">
                        {/* <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Login
                        </h1> */}
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                            </div>


                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" />
                                <div className="flex items-start mt-4">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-700 dark:text-gray-300">Remember me</label>
                                </div>
                                <button
                                    className="my-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">

                                    <span className="ml-3">
                                        Login
                                    </span>
                                </button>

                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Forgot password?</a>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by connectverse's {' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service {' '}
                                    </a>
                                    and its {' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className=" w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${MelodyVerse})`
                        }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;