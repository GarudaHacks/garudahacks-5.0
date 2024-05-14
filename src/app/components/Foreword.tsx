import React from 'react'
import Image from "next/image"

const Foreword = () => {

    return(
        <main className="w-full h">
            <h1 className="text-white text-center font-pptelegraf pt-8">
                Special Event
            </h1>
            <h2 className="text-white text-center text-3xl font-bold">
                Celebrating 5 Years of Garuda Hacks!
            </h2>

            <div className="flex w-10/12 lg:w-[1040px] flex-col items-center justify-between mx-auto mb-20 mt-5">
                <div className="flex flex-col w-full mb-5 lg:mb-0 mx-auto lg:ml-0 mt-3 px-5 pt-4 pb-6 rounded-md border border-white">
                    <h1 className="text-white text-left text-3xl font-bold mb-3"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100">Sigma: Kindness for a Better Tomorrow</span></h1>
                    <p className="mb-2">Our theme for our 5th year of Garuda Hacks is “Sigma”, the Greek alphabet Σ. In mathematics, Sigma is the addition of every single number within a set. </p>
                    <p className="mb-2">In designing Garuda Hacks this year, we look back at the spirit of the hackathon, our past projects, and what we stand for. Yes, a few of the more ambitious projects aim to “change the world”, but the vast majority of them aim to impact a small group of their community, through a niche solution.</p>
                    <p className="mb-2">Sigma represents that spirit. Every project or idea is life-changing for a small group of people. Together, if we have a million of these ideas, we will build a better tomorrow.</p>
                </div>
                <div className="flex flex-col w-full mx-auto lg:mr-0 mt-3 px-5 pt-4 pb-6 rounded-md border border-white">
                    <h1 className="text-white text-left text-3xl font-bold mb-3"><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100">Event Format Change: 2 Tracks, 5 Winners</span></h1>
                    <p className="mb-2">This year, we chose two tracks that we feel best embody the community-minded <i>gotong royong</i> mindset Indonesians were taught since we were born.</p>
                    <p className="mb-2">The “Helping Hands” track aims to help our brothers and sisters in need, while the “Stronger Together” track aims to connect each other to work on change and improvement.</p>
                    <p className="mb-2">Of course, because this is our 5th year anniversary, we will award the top 5 projects for each track.</p>
                    <p className="mb-2">*Challenge prompts—which will guide your project if you are stuck!—will be released the day of the event, but you are free to start ideating now. No coding will be allowed before the hackathon.*</p>
                    <p className="mb-2"></p>
                    
                </div>
            </div>

        </main>
    )

}

export default Foreword