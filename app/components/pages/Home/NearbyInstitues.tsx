import React, { useCallback, useEffect, useState } from 'react'

import usePublicRoutes from '../../../hooks/usePublicRoutes'
import SectionTitle from '../../headers/SectionTitle'
import { Location } from '../../../types'
import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { Card, Button } from '../../base'
import InstitutesCard from '../../institues/InstituesCard'

interface NearbyInstituesProps {
    location: Location
}

const NearbyInstitues: React.FC<NearbyInstituesProps> = ({ location }) => {
    const { getNearbyInstitutes } = usePublicRoutes()
    const { longitude, latitude } = location
    const [InstitutesArray, setInstitutesArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const getInstitutes = useCallback(async () => {
        try {
            const response = await getNearbyInstitutes(longitude, latitude)
            if (response) {
                setLoading(false)
                setInstitutesArray(response.data.slice(0, 8))
            }
        } catch (error) {
            setLoading(false)
            console.log({ error })
        }
        return undefined
    }, [getNearbyInstitutes, latitude, longitude])

    useEffect(() => {
        getInstitutes()

        return () => {
            getInstitutes()
        }
    }, [getNearbyInstitutes, getInstitutes, latitude, longitude])

    return (
        <div className="container px-3 py-6 mt-20 mx-auto">
            <div className="flex flex-col justify-between">
                <SectionTitle title='NEARBY INSTITUTES' />
                <div className="py-5 mx-auto overflow-hidden">
                    {loading ? (<div>loading</div>) : (
                        <div className="flex flex-wrap -m-4">
                            <InstitutesCard institutes={InstitutesArray} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default NearbyInstitues

