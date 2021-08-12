import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'

import { Card, Button } from '../base'

const InstructorsCard = (props: any) => {
    const item = props
    return (
        item.instructors.map((instructorItem: any, index: number) => {
            const image = instructorItem.photoUrl || ''
            return (
                <>
                    <Card img={image} index={index} title={`${instructorItem.firstName} ${instructorItem.lastName}`} key={index} >
                        <div className="">
                            <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-md pr-3 py-1 border-gray-200 lg:ml-auto md:ml-0 ml-auto ">
                                <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{instructorItem.hourlyRate || 0}
                            </span>
                        </div>
                        <div className="flex items-center flex-wrap ">
                            <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-gray-200">
                                <LocationMarkerIcon className="h-4 w-4" aria-hidden="true" />{instructorItem.distance && instructorItem.distance.toFixed(2) || 0} km
                            </span>
                            <Button title="More Details" link={`/institutes/${instructorItem.uid}`} buttonClass="bg-gray-800 rounded-lg  text-white" />
                        </div>
                    </Card>
                </>
            )
        })

    )
}

export default InstructorsCard
