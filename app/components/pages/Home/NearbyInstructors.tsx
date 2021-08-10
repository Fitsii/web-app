import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import usePublicRoutes from '../../../hooks/usePublicRoutes'
import SectionTitle from '../../headers/SectionTitle'
import { Location } from '../../../types'
import { StarIcon, CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'

interface NearbyInstructorsProps {
    location: Location
}

const NearbyInstructors: React.FC<NearbyInstructorsProps> = ({ location }) => {
    const { getNearbyInstructors } = usePublicRoutes()
    const { longitude, latitude } = location
    const [listArray, setListArray] = useState([]);

    const getInstructions = useCallback(async () => {
        try {
            const response = await getNearbyInstructors(longitude, latitude)
            setListArray(response.data.slice(0, 8))
        } catch (error) {
            console.log({ error })
        }
        return undefined
    }, [getNearbyInstructors, latitude, longitude])

    useEffect(() => {
        getInstructions()

        return () => {
            getInstructions()
        }
    }, [getInstructions])

    return (
        <div className="container px-3 py-6 mt-20 mx-auto">
            <div className="flex flex-col justify-between">
                <SectionTitle title='NEARBY INSTRUCTORS' />
                <div className="py-5 mx-auto overflow-hidden">
                    <div className="flex flex-wrap -m-4">
                        {listArray.map((list: any, index) => {
                            return (
                                <div className="p-4 md:w-1/3 lg:w-1/4 mx-auto md:mx-0" key={index}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" height="720" width="400" src={list.photoUrl} alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-900 m-0">{list.firstName} {list.lastName}</h1>
                                            <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-md pr-3 py-1 border-gray-200 lg:ml-auto md:ml-0 ml-auto ">
                                                <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{list.hourlyRate || 0}
                                            </span>
                                            <div className="flex items-center flex-wrap mt-4">
                                                <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-gray-200">
                                                    <LocationMarkerIcon className="h-4 w-4" aria-hidden="true" />{list.distance && list.distance.toFixed(2) || 0} km
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

export default NearbyInstructors

