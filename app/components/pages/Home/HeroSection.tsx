import React from 'react'

const HeroSection = () => {
    return (
        <main className="h-screen">
            <div className="pt-16 pb-32 flex content-center items-center justify-center">
                <div
                    className="absolute top-0 w-full h-screen bg-center bg-cover"
                    style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/fitsii-app.appspot.com/o/assets%2Fherobanner.png?alt=media&token=b843d839-8dc6-4cc0-8cfd-9e69b5948dfd')", }}
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
                                DISCOVER THE POWER OF TRAINNING
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Get more from every workout with customized guideance of personal training
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection

