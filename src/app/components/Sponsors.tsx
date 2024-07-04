import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

interface Sponsor {
  name: string;
  logoFilename: string; // Assuming you store filenames in public/imgs
}

const sponsors: Sponsor[] = [
  { name: 'Sponsor 1', logoFilename: 'mayora.png'},
  { name: 'Sponsor 2', logoFilename: 'kitkat.png'},
  { name: 'Sponsor 3', logoFilename: 'xyz.png'},
];

const Sponsors: React.FC = () => {
  return (
    <div className="w-full max-h-6xl flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-8 w-4/5 text-center pt-12">
        <h2 className="text-3xl font-bold">Sponsors</h2>
        <p className="mt-2 text-lg">
          Garuda Hacks 5.0 would not be possible without the support of our incredible sponsors. 
          Throughout the event, they’ll host workshops, discuss job opportunities, host prizes, and much more.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 pt-10 pb-0">
        <AnimatedSection>
        <div className="flex items-center justify-center">
        <Image 
          src="wolframalpha.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
      <AnimatedSection>
      <div className="flex items-center justify-center">
        <Image 
          src="hmif.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center">
        <Image 
          src="kitkat2.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center translate-y-[50%]">
        <Image 
          src="multipolar.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center">
        <Image 
          src="Champion Logo.png"
          width={250}
          height={100}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center translate-y-[30%]">
        <Image 
          src="xyz.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center translate-y-[50%]">
        <Image 
          src="axure.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[2%]">
        <Image 
          src="jetbrains.webp"
          width={300}
          height={100}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center translate-y-[50%]">
        <Image 
          src="Caffino_logo.svg"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[25%]">
        <Image 
          src="paper.png"
          width={400}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center translate-y-[70%]">
        <Image 
          src="lestari.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[28%]">
        <Image 
          src="velo.png"
          width={400}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[50%]">
        <Image 
          src="atwsolar.png"
          width={400}
          height={200}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[60%]">
        <Image 
          src="mcdonalds.jpeg"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
        <AnimatedSection>
        <div className="flex items-center justify-center -translate-y-[80%]">
        <Image 
          src="tiket.png"
          width={300}
          height={150}
          alt="Gradients"
          className="z-0"
        />
      </div>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-2 w-full gap-0 pt-0">
      <AnimatedSection>
            <div className="flex items-center justify-center -translate-y-[60%] translate-x-[10%]">
        <Image 
          src="prima.png"
          width={400}
          height={200}
          alt="Gradients"
          className="z-0"
        />
      </div>
            </AnimatedSection>
            <AnimatedSection>
            <div className="flex items-center justify-center -translate-y-[60%] -translate-x-[10%]">
        <Image 
          src="teh botol.png"
          width={400}
          height={200}
          alt="Gradients"
          className="z-0"
        />
      </div>
            </AnimatedSection>
      </div>
    </div>
  );
};

export default Sponsors;
