import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import { CurrencyDollarIcon } from '@heroicons/react/outline'

import usePublicRoutes from '../../../hooks/usePublicRoutes'
import SectionTitle from '../../headers/SectionTitle'
import { Location } from '../../../types'

interface NearbyClassesProps {
    location: Location
}

const NearbyClasses: React.FC<NearbyClassesProps> = ({ location }) => {
    const { getNearbyClasses } = usePublicRoutes()
    const { longitude, latitude } = location
    const [listArray, setListArray] = useState([]);

    const getClasses = useCallback(async () => {
        try {
            const response = await getNearbyClasses(longitude, latitude)
            setListArray(response.data.slice(0, 8))
        } catch (error) {
            console.log({ error })
        }
        return undefined
    }, [getNearbyClasses, latitude, longitude])

    useEffect(() => {
        getClasses()

        return () => {
            getClasses()
        }
    }, [getClasses, getNearbyClasses, latitude, longitude])

    return (
        <div className="container px-3 py-6 mt-20 mx-auto">
            <div className="flex flex-col justify-between">
                <SectionTitle title='NEARBY Classes' />
                <div className="py-5 mx-auto overflow-hidden">
                    <div className="flex flex-wrap -m-4">
                        {listArray.map((list: any, index) => {
                            const image = list.imageUrl || ''
                            return (
                                <div className="p-4 md:w-1/3 lg:w-1/4 mx-auto md:mx-0" key={index}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" height="720" width="400" src={image} alt="blog" />
                                        <div className="p-6">
                                            {list.onlineClass && <div className="badge badge-accent">online</div>}
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{list.title}</h1>
                                            <div className="flex items-center flex-wrap ">
                                                <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{list.price}
                                                </span>
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 lg:ml-auto md:ml-0 ml-auto ">More Details
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NearbyClasses
