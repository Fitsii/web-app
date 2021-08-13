import React, { useCallback, useEffect, useState } from 'react'
import HeroBanner from '../app/components/Hero/HeroBanner'
import usePublicRoutes from '../app/hooks/usePublicRoutes'
import Layout from '../app/components/layouts/Page'
import InstitutesCard from '../app/components/institues/InstituesCard'

const Institutes = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
    const { getNearbyInstitutes } = usePublicRoutes()
    const [InstitutesArray, setInstitutesArray] = useState([]);
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

    const getInstitutes = useCallback(async () => {
        try {
            const response = await getNearbyInstitutes(location.longitude, location.latitude)
            if (response) {
                setLoading(false)
                setInstitutesArray(response.data)
            }
        } catch (error) {
            setLoading(false)
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
                    {loading ? (<div>loading</div>) : (
                        <div className="flex flex-wrap -m-4">
                            <InstitutesCard institutes={InstitutesArray} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

// eslint-disable-next-line 
Institutes.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Institutes.layout = Layout;

export default Institutes
