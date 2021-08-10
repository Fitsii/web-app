import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import HeroBanner from '../../app/components/Hero/HeroBanner';
import usePublicRoutes from '../../app/hooks/usePublicRoutes';
import { LocationMarkerIcon } from '@heroicons/react/outline';
import { DatePicker, Input, Spin, TimePicker } from 'antd';
import TitleHeader from '../../app/components/headers/TitleHeader';
import Loader from '../../app/components/commons/Loader';
import Layout from '../../app/components/layouts/Page'


const Instructor = () => {
    const router = useRouter();
    const { iid } = router.query;
    const [userData, setUserData] = useState<any>([])
    const [loading, setLoading] = useState(true)

    const { getInstituteDetails } = usePublicRoutes()

    const getInstitute = useCallback(async () => {
        try {
            const response = await getInstituteDetails(iid)
            if (response) {
                setLoading(false)
                setUserData(response.data)
            }
            console.log({ response })
        } catch (error) {
            setLoading(false)
            console.log({ error })
        }
        return undefined
    }, [getInstituteDetails, iid])

    useEffect(() => {
        getInstitute()

        return () => {
            getInstitute()
        }
    }, [getInstitute])
    return (
        <div>
            {loading ?
                <Loader />
                :
                <>
                    <HeroBanner title={`${userData.firstName} ${userData.lastName}`} caption="" image={userData.photoUrl} />
                    {/* <div className="bg-gray-200 -mt-12">
                        <StyledAnchor targetOffset={targetOffset} showInkInFixed={false}>
                            <div className="container px-3 py-4 mx-auto flex">
                                <Link href="#institute-overview" title="Overview" />
                                <Link href="#institute-gallery" title="Gallery" />
                                <Link href="#institute-certificates" title="Certificates" />
                                <Link href="#institute-amenities" title="Amenities" />
                                <Link href="#institute-our-classes" title="Classes" />
                                <Link href="#institute-reviews" title="Reviews" />
                            </div>
                        </StyledAnchor>
                    </div> */}
                    <div className="container px-3 pb-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 pr-1">
                                <div>
                                    <h2 className="text-2xl">{userData.firstName} {userData.lastName}</h2>
                                    <p className="text-muted flex text-center"><LocationMarkerIcon className="h-4 w-4" /> <span>{userData.address || '757 Market Street, East Sydney, AU'}</span></p>
                                </div>
                                <div className="py-4">
                                    <TitleHeader title="About This Instructor" />
                                </div>

                                <div id="institute-gallery" className="my-8">
                                    <TitleHeader title="Gallery" />
                                    <div className="space-x-4 carousel carousel-center">
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/500/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/501/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/502/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/503/256/144" className="rounded-box" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div id="institute-certificates" className="my-8">
                                    <TitleHeader title="Certificates" />
                                    <div className="space-x-4 carousel carousel-center">
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/500/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/501/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/502/256/144" className="rounded-box" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://picsum.photos/id/503/256/144" className="rounded-box" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 ">
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2 border-gray-200">
                                    <div className="card-title bg-gray-200 p-4 text-center">BOOKING DETAILS</div>
                                    <div className="card-body">
                                        <div className="form-control flex flex-col flex-wrap md:flex-row justify-between">
                                            <div className="">
                                                <label className="label">
                                                    <span className="label-text text-black">Date</span>
                                                </label>
                                                <DatePicker
                                                    allowClear
                                                    placeholder="Select Date"
                                                    size="large"
                                                    format="DD/MM/YYYY"
                                                    className="w-full"
                                                    onChange={(date) => console.log(date)}
                                                />
                                            </div>
                                            <div>
                                                <label className="label">
                                                    <span className="label-text text-black">Time</span>
                                                </label>
                                                <TimePicker
                                                    allowClear
                                                    placeholder="Select Time"
                                                    size="large"
                                                    format="HH:mm"
                                                    className="w-full"
                                                    onChange={(time) => console.log(time)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-black">No. Of Person(s):</span>
                                            </label>
                                            <Input
                                                placeholder="Input a number"
                                                maxLength={25}
                                                minLength={1}
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}

// eslint-disable-next-line 
Instructor.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Instructor.layout = Layout;

export default Instructor
