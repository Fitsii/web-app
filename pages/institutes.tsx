import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import Link from 'next/Link'
import React, { useCallback, useEffect, useState } from 'react'
import HeroBanner from '../app/components/Hero/HeroBanner'
import usePublicRoutes from '../app/hooks/usePublicRoutes'

const Institutes = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
    const { getNearbyInstitutes } = usePublicRoutes()
    const [listArray, setListArray] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            let location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            setLocation(location)
        })
    }, [])

    const getInstitutes = useCallback(async () => {
        try {
            const response = await getNearbyInstitutes(location.longitude, location.latitude)
            setListArray(response.data)
        } catch (error) {
            console.log({ error })
        }
        return undefined
    }, [getNearbyInstitutes, location.latitude, location.longitude])

    useEffect(() => {
        getInstitutes()

        return () => {
            getInstitutes()
        }
    }, [getNearbyInstitutes, getInstitutes])


    return (
        <>
            <HeroBanner
                title="Institutes"
                caption="Get more from every workout with customized guideance of personal training"
            />
            <div className="container px-3 py-4 mx-auto">
                <div className="py-5 mx-auto overflow-hidden">
                    <div className="flex flex-wrap -m-4">
                        {listArray.map((list, index) => {
                            console.log({ list })
                            return (
                                <div className="p-4 md:w-1/3 lg:w-1/4 mx-auto md:mx-0" key={index}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" height="720" width="400" src={list.photoUrl} alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-900 m-0">{list.firstName} {list.lastName}</h1>
                                            <p className="leading-relaxed mb-3">{list.bio}</p>

                                            <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-md pr-3 py-1 border-gray-200 lg:ml-auto md:ml-0 ml-auto ">
                                                <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{list.hourlyRate || 0}
                                            </span>
                                            <div className="flex items-center flex-wrap mt-4">
                                                <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-gray-200">
                                                    <LocationMarkerIcon className="h-4 w-4" aria-hidden="true" />{list.distance && list.distance.toFixed(2) || 0} km
                                                </span>
                                                <Link href={`/institutes/${list.uid}`}>
                                                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 lg:ml-auto md:ml-0 ml-auto ">More Details
                                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Institutes
