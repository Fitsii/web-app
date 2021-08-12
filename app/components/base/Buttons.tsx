import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import {
    faChevronRight,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons'

interface ButtonsProps {
    title: string,
    link: string
    type?: string
    icon?: IconDefinition
    buttonIcon?: IconDefinition
    buttonClass?: string
}

const Buttons: React.FC<ButtonsProps> = ({ title, link, buttonClass, buttonIcon: icon }) => {
    return (
        <a className={classNames('p-2 inline-flex items-center md:mb-2 lg:mb-0 lg:ml-auto md:ml-0 ml-auto', buttonClass)} href={link}>
            <span className="mr-2">{title}</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
        </a>
    )
}

export default Buttons
