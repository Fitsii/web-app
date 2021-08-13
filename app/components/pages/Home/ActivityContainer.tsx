import React from 'react'
import SectionTitle from '../../headers/SectionTitle'

const ActivityContainer = () => {

    const ActivityData = [
        {
            name: 'yoga',
            img: '/images/yoga.png'
        },
        {
            name: 'dance',
            img: '/images/dance.png'
        },
        {
            name: 'gym',
            img: '/images/gym.png'
        },
        {
            name: 'boxing',
            img: '/images/boxing.png'
        }
    ];

    return (
        <div className="container px-3 py-4 mx-auto">
            <SectionTitle title='Discover Activity' />
            <div className="container mx-auto mt-8">
                <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-4 ">
                    {ActivityData.map((activity, index) => {
                        return (
                            <div className="flex relative justify-center text-2xl rounded-xl p-6 bg-gray-100 h-20 md:h-40 lg:h-80" key={index}>
                                <img className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={activity.img} alt={activity.name} />
                                <p className="absolute bottom-0 uppercase text-white font-bold justify-center text-sm md:text-2xl ">{activity.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivityContainer
