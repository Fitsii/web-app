import React from 'react'

interface SectionTitle {
    title: string
}

const SectionTitle: React.FC<SectionTitle> = ({ title }) => {
    return (
        <div className="">
            <p className="uppercase text-primary p-0 m-0 text-blue-600 text-xl tracking-wide">FITSII</p>
            <h2 className="uppercase text-2xl">{title}</h2>
        </div>
    )
}

export default SectionTitle
