import React from 'react'
import styled from 'styled-components'

interface HeroBannerProps {
    title?: string
    caption?: string
    image?: string
}

const HeroWrapper = styled.div`
    min-Height: 100vh;
`

const HeroBanner: React.FC<HeroBannerProps> = ({ title, caption, image }) => {

    const img = image || 'https://firebasestorage.googleapis.com/v0/b/fitsii-app.appspot.com/o/assets%2Fherobanner.png?alt=media&token=b843d839-8dc6-4cc0-8cfd-9e69b5948dfd'
    return (
        <HeroWrapper className="hero">
            <div className="pt-16 pb-32 flex content-center items-center justify-center">
                <div
                    className="absolute top-0 w-full h-screen bg-center bg-cover"
                    style={{ backgroundImage: `url(${img})`, }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-60 bg-black"
                    ></span>
                </div>
                <div className="container absolute top-0 bottom-0 flex text-center justify-center">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full px-4 ml-auto mr-auto text-center ">
                            <h1 className="text-white font-semibold text-5xl">
                                {title || 'FITSII'}
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                {caption}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    )
}

export default HeroBanner
