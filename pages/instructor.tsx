import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../app/components/layouts/Page'
import HeroBanner from '../app/components/Hero/HeroBanner'
import usePublicRoutes from '../app/hooks/usePublicRoutes'
import InstructorsCard from '../app/components/instructors/InstructorsCard'

const Instructor = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
    const { getNearbyInstructors } = usePublicRoutes()
    const [InstructorsArray, setInstructorsArray] = useState([]);
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

    const getInstructor = useCallback(async () => {
        try {
            const response = await getNearbyInstructors(location.longitude, location.latitude)
            if (response) {
                setLoading(false)
                setInstructorsArray(response.data)
            }
        } catch (error) {
            setLoading(false)
            console.log({ error })
        }
        return undefined
    }, [getNearbyInstructors, location.latitude, location.longitude])

    useEffect(() => {
        getInstructor()

        return () => {
            getInstructor()
        }
    }, [getInstructor])


    return (
        <>
            <HeroBanner
                title="Instructors"
                caption="Get more from every workout with customized guideance of personal training"
            />
            <div className="container px-3 py-4 mx-auto">
                <div className="py-5 mx-auto overflow-hidden">
                    {loading ? (<div>loading</div>) : (
                        <div className="flex flex-wrap -m-4">
                            <InstructorsCard instructors={InstructorsArray} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

// eslint-disable-next-line 
Instructor.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Instructor.layout = Layout;

export default Instructor
