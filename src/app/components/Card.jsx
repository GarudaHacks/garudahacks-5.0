
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Card = ({ card }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (imgError && retryCount < 3) {
      const retryTimeout = setTimeout(() => {
        console.log(`Retrying ${card.url}, attempt ${retryCount + 1}`);
        setImgError(false);
        setRetryCount(retryCount + 1);
      }, 1000);
      return () => clearTimeout(retryTimeout);
    }
  }, [imgError, retryCount, card.url]);

  return (
    <div className="group relative flex flex-col items-center h-[450px] w-full overflow-hidden bg-black rounded-lg transition-all duration-300">
      <div className="relative w-full h-[400px]">
        <Image
          src={card.url}
          alt={card.name}
          objectFit="cover"
          loading="eager"
          layout="fill"
          className={`transition-transform duration-300 w-3/4 h-3/4 rounded-t-lg object-contain ${imgLoaded ? 'block' : 'hidden'}`}
          onLoadingComplete={() => setImgLoaded(true)}
          onError={() => {
            console.error(`Failed to load ${card.url}`);
            setImgError(true);
          }}
        />
        {!imgLoaded && !imgError && <div className="w-full h-full bg-gray-200 animate-pulse"></div>}
        {imgError && retryCount >= 3 && <div className="w-full h-full bg-red-500 text-white flex items-center justify-center">Failed to load</div>}
      </div>
      <div className="text-center mt-4">
        <p className="text-white text-xl">{card.name}</p>
        <p className="text-gray-400 text-sm">{card.description}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <p className="text-white text-center">{card.bio}</p>
      </div>
    </div>
  );
};

export default Card;
