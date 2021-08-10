import React from 'react'

interface SectionTitle {
    title: string
}

const SectionTitle: React.FC<SectionTitle> = ({ title }) => {
    return (
        <div className="">
            <h2 className="uppercase text-xl">{title}</h2>
        </div>
    )
}

export default SectionTitle
