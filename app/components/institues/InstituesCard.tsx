import { CurrencyDollarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'

import { Card, Button } from '../base'

const InstitutesCard = (props: any) => {
    const item = props
    return (
        item.institutes.map((instutesItem: any, index: number) => {
            const image = instutesItem.photoUrl || ''
            return (
                <Card img={image} index={index} title={`${instutesItem.firstName} ${instutesItem.lastName}`} key={index} >
                    <div className="">
                        <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-md pr-3 py-1 border-gray-200 lg:ml-auto md:ml-0 ml-auto ">
                            <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{instutesItem.hourlyRate || 0}
                        </span>
                    </div>
                    <div className="flex items-center flex-wrap ">
                        <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-gray-200">
                            <LocationMarkerIcon className="h-4 w-4" aria-hidden="true" />{instutesItem.distance && instutesItem.distance.toFixed(2) || 0} km
                        </span>
                        <Button title="More Details" link={`/institutes/${instutesItem.uid}`} buttonClass="bg-gray-800 rounded-lg  text-white" />
                    </div>
                </Card>
            )
        })

    )
}

export default InstitutesCard
