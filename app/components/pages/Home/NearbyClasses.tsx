import React, { useCallback, useEffect, useState } from 'react'

import usePublicRoutes from '../../../hooks/usePublicRoutes'
import SectionTitle from '../../headers/SectionTitle'
import { Location } from '../../../types'
import ClassesCard from '../../classes/ClassesCard'

interface NearbyClassesProps {
    location: Location
}

const NearbyClasses: React.FC<NearbyClassesProps> = ({ location }) => {
    const { getNearbyClasses } = usePublicRoutes()
    const { longitude, latitude } = location
    const [listArray, setListArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const getClasses = useCallback(async () => {
        try {
            const response = await getNearbyClasses(longitude, latitude)
            if (response) {
                setLoading(false)
                setListArray(response.data.slice(0, 8))
            }
        } catch (error) {
            setLoading(false)
            console.log({ error })
        }
    }, [getNearbyClasses, latitude, longitude])

    useEffect(() => {
        getClasses()

        return () => {
            getClasses()
        }
    }, [getClasses, getNearbyClasses, latitude, longitude])

    return (
        <div className="container px-3 py-6 mt-12 mx-auto">
            <div className="flex flex-col justify-between">
                <SectionTitle title='NEARBY Classes' />
                {loading ? (<div>loading</div>) : (
                    <div className="py-5 mx-auto overflow-hidden">
                        <div className="flex flex-wrap -m-4">
                            <ClassesCard classes={listArray} />
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default NearbyClasses
