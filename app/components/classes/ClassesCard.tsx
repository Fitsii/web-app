import { CurrencyDollarIcon } from '@heroicons/react/outline'
import React from 'react'

import { Card, Button } from '../base'

const ClassesCard = (props: any) => {
    const item = props
    return (
        item.classes.map((classItem: any, index: number) => {
            const image = classItem.imageUrl || ''
            return (
                <Card img={image} index={classItem.index} title={classItem.title} key={index}>
                    <div className="flex items-center flex-wrap ">
                        <span className="text-gray-700 mr-3 inline-flex items-center leading-none text-sm py-1 ">
                            <CurrencyDollarIcon className="h-4 w-4" aria-hidden="true" />{classItem.price}
                        </span>
                        <Button title="More Details" link={`/classes/${classItem.myUid}`} buttonClass="bg-gray-800 rounded-lg  text-white" />
                    </div>
                </Card >
            )
        })

    )
}

export default ClassesCard
