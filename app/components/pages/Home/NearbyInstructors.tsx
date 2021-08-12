import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import usePublicRoutes from '../../../hooks/usePublicRoutes'
import SectionTitle from '../../headers/SectionTitle'
import { Location } from '../../../types'
import { StarIcon, CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import InstructorsCard from '../../instructors/InstructorsCard'


interface NearbyInstructorsProps {
    location: Location
}

const NearbyInstructors: React.FC<NearbyInstructorsProps> = ({ location }) => {
    const { getNearbyInstructors } = usePublicRoutes()
    const { longitude, latitude } = location
    const [InstructorsArray, setInstructorsArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const getInstructions = useCallback(async () => {
        try {
            const response = await getNearbyInstructors(longitude, latitude)
            if (response) {
                setLoading(false)
                setInstructorsArray(response.data.slice(0, 8))
            }
        } catch (error) {
            setLoading(false)
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
                {loading ? (<div>loading</div>) : (
                    <div className="py-5 mx-auto overflow-hidden">
                        <div className="flex flex-wrap -m-4">
                            <InstructorsCard instructors={InstructorsArray} />
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}

export default NearbyInstructors

