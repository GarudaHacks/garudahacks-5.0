import React from 'react';
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="h-[125vh] bg-black relative overflow-clip">
      <div className="absolute top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <img src="logo.png" alt="Logo" className="h-40 lg:h-24 mb-4 lg:mb-0" />
          <div className="flex flex-col text-left">
            <h1 className="text-white bg-clip-text bg-gradient-to-r from-red-300 via-purple-500 to-gray-100 mb-0 text-6xl font-extrabold font-pptelegraf">
              Garuda Hacks 5.0
            </h1>
            <h2 className="text-white mt-0 text-3xl font-light font-pptelegraf">
              Empowerment. Innovation. Collaboration. 
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center z-10">
          <a href="https://airtable.com/apphenlZsFuH6HYFR/pagaUiTnXBQDMklZf/form" target="_blank">
            <button className="text-white font-pptelegraflight px-8 py-4 border border-white bg-black-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Register Now
            </button>
          </a>
          <div className="text-white text-center mt-4">
            <p className="text-lg">Date: July 11-13, 2024</p>
            <p className="text-lg">Venue: Multimedia Nusantara University (UMN)</p>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute bottom-0 left-0 w-[80%] lg:h-[40%] lg:w-auto -translate-x-[40%] lg:-translate-x-[40%] lg:-translate-y-[60%] z-0">
        <Image 
          src="gradient.png"
          width={700}
          height={900}
          alt="Gradients"
          className="z-0"
        />
      </div>
      <div className="absolute top-0 right-0 w-[80%] translate-x-[40%] lg:h-[40%] lg:w-auto lg:translate-x-[25%] lg:-translate-y-[20%] z-0">
        <Image 
          src="gradient2.png"
          width={700}
          height={900}
          alt="Gradients"
          className="z-0"
        />
      </div>
    </main>
  )
}

export default LandingPage;
