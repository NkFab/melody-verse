import React from 'react'
import BackDrop from '../../assets/backdrop.svg'
import MelodyVerse from '../../assets/melody-verse.svg'
import ConnectVerse from '../../assets/connectverse-logo.svg'

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center" style={{ backgroundImage: `url(${BackDrop})` }}>

            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={ConnectVerse}
                            className=" w-52 mx-auto" />
                    </div>
                    <div className=" mt-32 flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">


                            <div className="mx-auto max-w-xs gap-5">
                                {children}
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

export default AuthLayout