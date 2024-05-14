import React from 'react'
import Image from "next/image"


const Tracks = () => {

    return(
        <main className="w-full h">
            <h1 className="text-white text-center font-pptelegraf pt-8">
                Explore the Tracks
            </h1>
            <h2 className="text-white text-center text-3xl font-bold w-11/12 mx-auto">
                Ignite Change in Your Field of Interest
            </h2>

            <div className="flex w-10/12 lg:w-[1040px] flex-col items-center justify-between mx-auto mb-20 mt-5 lg:flex-row">
                <div className="flex flex-col w-full mb-5 lg:mb-0 lg:w-[40%] mx-auto lg:ml-0 mt-3 px-5 pt-4 pb-6 rounded-md border border-white">
                    <h1 className="text-white text-left text-3xl font-bold mb-3"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100">Helping Hands</span></h1>
                    Despite life's obstacles, there are always those who lend a hand when it matters most. We can embody this spirit by extending a helping hand to individuals, including those who have been through the justice system, in finding their footing once again.
                </div>
                <div className="flex flex-col w-full lg:w-[40%] mx-auto lg:mr-0 mt-3 px-5 pt-4 pb-6 rounded-md border border-white">
                    <h1 className="text-white text-left text-3xl font-bold mb-3"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100">Stronger Together</span></h1>
                    Leadership, innovation, and determination for working for a common goal are all characteristics vital towards achieving a better product. By connecting with those in nearby communities, your ideas can drive major change and improvement.
                    
                </div>
            </div>

        </main>
    )

}

export default Tracks