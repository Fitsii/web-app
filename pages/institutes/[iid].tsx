import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Anchor, Image as AntImage } from 'antd';
import Layout from '../../app/components/layouts/Page'

import HeroBanner from '../../app/components/Hero/HeroBanner';
import usePublicRoutes from '../../app/hooks/usePublicRoutes';

import { StyledAnchor } from '../../app/styles/styled'
import TitleHeader from '../../app/components/headers/TitleHeader';
import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const { Link } = Anchor;

const Institute = () => {
    const router = useRouter();
    const { iid } = router.query;
    const [userData, setUserData] = useState<any>([])
    const [slideIndex, setSlideIndex] = useState(0);
    const slider = useRef();

    const [targetOffset, setTargetOffset] = useState<number>(0);

    useEffect(() => {
        setTargetOffset(window.innerHeight / 2);
    }, []);

    const { getInstituteDetails } = usePublicRoutes()

    const getInstitute = useCallback(async () => {
        try {
            const response = await getInstituteDetails(iid)
            setUserData(response.data)
            console.log({ response })
        } catch (error) {
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
        <>
            {userData &&
                <>
                    <HeroBanner title={`${userData.firstName} ${userData.lastName}`} image={userData.photoUrl} />
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
                        <div>
                            <h2 className="text-2xl">{userData.firstName} {userData.lastName}</h2>
                            <p className="text-muted flex text-center"><LocationMarkerIcon className="h-4 w-4" /> <span>{userData.address || '757 Market Street, East Sydney, AU'}</span></p>
                        </div>

                        <div id="institute-overview" className="my-8">
                            <TitleHeader title="About This Institute" />
                            <p>{userData.description}</p>
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

                        <div id="institute-amenities" className="my-8">
                            <TitleHeader title="Amenities" />
                            <button className="btn btn-accent">
                                Shower
                            </button>

                        </div>

                        <div id="institute-our-classes" className="my-8">
                            <TitleHeader title="Our Classes" />
                            <div className="flex flex-wrap">
                                <div className="md:w-1/3 lg:w-1/4 mx-auto md:mx-0">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" height="720" width="400" src="https://picsum.photos/id/1005/400/250" alt="blog" />
                                        <div className="p-6">
                                            <div className="badge badge-accent">online</div>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Class Name</h1>
                                            <div className="flex items-center flex-wrap ">
                                                <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />3
                                                </span>
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 lg:ml-auto md:ml-0 ml-auto ">More Details
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            }
        </>
    )
}

// eslint-disable-next-line 
Institute.getLayout = (page: any) => (
    <Layout>{page}</Layout>
)

Institute.layout = Layout;

export default Institute
