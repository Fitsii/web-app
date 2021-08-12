import React, { ReactElement } from 'react'

interface ModalProps {
    img: string
    title: string
    onlineClass?: boolean
    index: number
}

const Card: React.FC<ModalProps> = ({
    img,
    title,
    onlineClass,
    index,
    children
}) => {
    return (
        <div className="p-4 md:w-1/3 lg:w-1/4 mx-auto md:mx-0">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" height="720" width="400" src={img} alt="blog" />
                <div className="p-6">
                    {onlineClass && <div className="badge badge-accent">online</div>}
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-2">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card
