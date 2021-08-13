import React, { ReactElement } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ErrorImg from '../../assets/error.png'

interface ErrorProps {
    title: string
    subtitle?: string
}

const Error: React.FC<ErrorProps> = ({ title, subtitle }) => {
    const router = useRouter()

    return (
        <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 md:mb-20 text-gray-600">
                        <h1 className="font-black uppercase text-8xl mb-10">{title}</h1>
                        <p className="text-2xl">{subtitle}</p>
                        <p className="text-md">The page you are looking for does not exist</p>
                    </div>
                    <div className="mb-10 md:mb-0">
                        <a className=" hover:text-accent cursor-pointer" onClick={() => router.back()}><FontAwesomeIcon icon={faChevronLeft} className="" /> <span className="text-lg"> Go Back</span>
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <Image src={ErrorImg} alt="FTSII error" />
                </div>
            </div>
        </div >
    )
}

export default Error
