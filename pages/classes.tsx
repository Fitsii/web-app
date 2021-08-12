import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../app/components/layouts/Page'
import HeroBanner from '../app/components/Hero/HeroBanner'
import usePublicRoutes from '../app/hooks/usePublicRoutes'
import ClassesCard from '../app/components/classes/ClassesCard'

const Classes = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
    const { getNearbyClasses } = usePublicRoutes()
    const [ClassesArray, setClassesArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            let location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            setLocation(location)
        })
    }, [])

    const getClasses = useCallback(async () => {
        try {
            const response = await getNearbyClasses(location.longitude, location.latitude)
            if (response) {
                setLoading(false)
                setClassesArray(response.data)
            }
        } catch (error) {
            setLoading(false)
            console.log({ error })
        }
        return undefined
    }, [getNearbyClasses, location.latitude, location.longitude])

    useEffect(() => {
        getClasses()

        return () => {
            getClasses()
        }
    }, [getClasses])


    return (
        <>
            <HeroBanner
                title="Classes"
                caption="Get more from every workout with customized guideance of personal training"
            />
            <div className="container px-3 py-4 mx-auto">
                <div className="py-5 mx-auto overflow-hidden">
                    {loading ? (<div>loading</div>) : (
                        <div className="flex flex-wrap -m-4">
                            <ClassesCard classes={ClassesArray} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

// eslint-disable-next-line 
Classes.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Classes.layout = Layout;

export default Classes
