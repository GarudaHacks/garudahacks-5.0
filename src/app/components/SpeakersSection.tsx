import React, { useState } from 'react';

const speakers = [
  {
    image: '/imgs/abstract/serano.jpeg',
    name: 'Serano',
    description:
      "Serano Tannason is a Forbes 30 under 30 awardee and the co-founder and CTO of insurance tech startup Bang Jamin. Bang Jamin is backed by venture capital firms Northstar, BRI Ventures, and Venturra. Serano has a bachelor's degree in computer science and robotics from Carnegie Mellon University. His robotics research and software projects have earned awards from Boeing, Google, and Microsoft. Outside of work, Serano enjoys reading books, working out, and playing golf, padel, and basketball.", 
  },
  {
    image: '/imgs/abstract/nurrohman.jpg',
    name: 'Nur Rohman',
    description: 'Currently building a product at dicoding.com as a CPO, creating a great learning experience for developers in Indonesia. Previously, Product Engineer @ Gojek.',
  },
  {
    image: '/imgs/abstract/wantahgabriela.JPG',
    name: 'Wantah Gabriela',
    description: "Gaby is a passionate education enthusiast and lifelong learner dedicated to leveraging technology to promote social equity and transform K-12 and early childhood learning. Having attended public schools in the United States, Gaby witnessed firsthand how education can drive social mobility and nurture curious, kind, and values-driven lifelong learners who will actively contribute to society. This inspired her to return to Indonesia to help elevate its educational system. Gaby's professional background includes consulting at Bain & Company, co-founding Bolu, an edtech startup that upskilled women MSMEs through WhatsApp courses, and serving on the Special Projects team for the Indonesian Ministry of Education under GovTech Edu Indonesia. She holds a degree in Economics and Sociology from UC Berkeley and will be pursuing a Master of Education at Harvard Graduate School of Education starting Summer 2024.",
  },
  {
    image: '/imgs/abstract/kikyadrian.jpeg',
    name: 'Kiky Adryan',
    description: "Kiky is the CTO of Salt Indonesia. He was born in Bogor and graduated from Bina Nusantara in technology science. He enjoys playing games, especially Roblox with my son.",
  },
  {
    image: '/imgs/abstract/novitaolivera.jpeg',
    name: 'Novita Olivera',
    description: "Meet Novita Olivera, the product manager at Tiket.com who has been navigating the financial and e-commerce worlds for over six years. Armed with a Bachelor of Science in Mathematics, she’s enthusiast at tackling projects that need a blend of conceptual, logical, and analytical thinking. Novita thrives on turning fresh ideas into realities that people adore, all while being an articulate and persuasive communicator. When she’s not exploring Product Managing or Business Performance Analysis, you’ll find her improving her skills in Big Data.", 
  },
  {
    image: '/imgs/abstract/adhywiranata.jpeg',
    name: 'Adhy Wiranata',
    description: 'Adhy is a frontend technical lead in tiket.com and has been in the software engineering industry for over eight years and specializes in front-end development and general web technology',
  },
  // Add more speakers as needed
];

const SpeakersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length);
  };

  return (
    <div className="flex flex-col items-center h-[600px] w-full overflow-hidden bg-black rounded-lg transition-all duration-300 pt-20 pb-30">
      <h1 className="text-3xl font-bold mb-4 text-white pt-5">Speakers</h1>
      <div className="flex w-3/5 items-center space-x-6 px-7 pt-10">
        <button
          onClick={handlePrevious}
          className="text-white text-6xl bg-transparent focus:outline-none"
        >
          &lt;
        </button>
        {speakers[currentIndex].image ? (
          <img src={speakers[currentIndex].image} alt={speakers[currentIndex].name} className="w-80 h-90 object-cover rounded-lg" />
        ) : (
          <div className="w-80 h-90 bg-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-white">No Image</span>
          </div>
        )}
        <div>
          <h2 className="text-2xl text-white">{speakers[currentIndex].name}</h2>
          <p className="text-gray-400">{speakers[currentIndex].description}</p>
        </div>
        <button
          onClick={handleNext}
          className="text-white text-6xl bg-transparent focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SpeakersSection;