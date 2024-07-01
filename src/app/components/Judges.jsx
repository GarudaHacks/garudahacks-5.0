"use client";
import React from "react";

const JudgesGrid = () => {
  return (
    <section className="min-h-screen bg-black py-10 max-w-7xl w-full mx-auto">
      <h2 className="text-white text-center text-3xl font-bold pb-10">Judges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative flex flex-col items-center h-[450px] w-full overflow-hidden bg-black rounded-lg transition-all duration-300">
      <img
        src={card.url}
        alt={card.name}
        className="w-3/4 h-3/4 object-cover transition-transform duration-300 rounded-t-lg"
      />
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

const cards = [
  {
    url: "/imgs/abstract/img1.jpeg",
    name: "Oliver",
    description: "Investments at Trihill Capital",
    bio: "Oliver is currently part of the Investments team at Trihill Capital, where he evaluates potential companies to invest in, partner, and accelerate growth. Prior to working, Oliver studied Chemical Engineering at Institut Teknologi Bandung. In his free time, Oliver enjoys playing team sports such as soccer, basketball. When he's not working out, you can find him traveling or listening to pitch ideas from friends and aspiring founders!",
    id: 1,
  },
  {
    url: "/imgs/abstract/img2.jpeg",
    name: "Natasha Tjandra",
    description: "Strategy & Ops at Uber",
    bio: "Natasha Tjandra is a member of Uber’s Strategy and Operations team. She focuses on driving strategic initiatives for a multibillion dollar business unit. She is passionate about designing and building creative solutions to some of the most challenging problems in the food delivery industry. Prior to Uber, she was at UC Berkeley pursuing a degree in Engineering.", 
    id: 2,
  },
  {
    url: "/imgs/abstract/img3.jpeg",
    name: "Andreas Tjendra",
    description: "Director, AI Innovation at KORIKA",
    bio: "Andreas Tjendra is an industrial and market technology consultant. Currently, Andreas serves as an Industry Partner at RMIT University and Director of AI Innovation at KORIKA (Quad Helix Collaboration for Accelerating Artificial Intelligence Innovation). Andreas is active in diplomacy in matters of technology and is a delegate from the ASEAN Business Advisory Council and Belt and Road General Chamber of Commerce Hong Kong.",
    id: 3,
  },
  {
    url: "/imgs/abstract/img4.jpeg",
    name: "Matthew Sijabat",
    description: "Investments at Northstar Group",
    bio: "Mathew Sijabat is an Investment Analyst at Northstar Ventures. Mathew have been members of the deal team in investments across consumer, agritech, software, and financial services. Previously, Mathew graduated as Valedictorian from the Economics Program at Universitas Gadjah Mada. When he’s not working, Mathew enjoys playing football and pool.",
    id: 4,
  },
  {
    url: "/imgs/abstract/img5.jpeg",
    name: "Ryan Guan",
    description: "Software Engineer at Meta",
    bio: "Ryan Guan is a programmer at Meta working on business messaging and graduated from the University of Pennsylvania with an undergraduate and masters degree. Ryan grew up in a suburb of Boston, Massachusetts and grew up swimming and sailing.",
    id: 5,
  },
  {
    url: "/imgs/abstract/img6.jpeg",
    name: "Isaac Winoto",
    description: "Product Manager at Microsoft",
    bio: "Isaac Winoto is a product manager at Microsoft and the founder of GenDigital Academy, a digital literacy movement teaching coding skills to 6000+ underprivileged children in Southeast Asia. Previously, Isaac has also held product and tech experiences in Indonesia’s government technology, B2B logistics, and climate solutions spaces. He was also named a World Economic Forum Global Shaper and a Little Joe Ventures Fellow in 2022.Ava is a software engineer at Apple, working on innovative solutions for the company's ecosystem.",
    id: 6,
  },
  {
    url: "/imgs/abstract/img7.jpeg",
    name: "Viandrudigo Djianto",
    description: "Software Engineer at Meta",
    bio: "Vian Djianto is a Software Engineer at Meta, where he works on the Ads team. Previously, Vian studied at the University of Pennsylvania, earning degrees from the College of Arts and Sciences, the School of Engineering and Applied Science, and The Wharton School. Vian grew up in Jakarta, Indonesia, before moving to the United States for university. Outside of work, Vian is a music enthusiast and loves sports. Name a time and place and he’ll be there even if he’s never tried the sport before!",
    id: 7,
  },
  {
    url: "/imgs/abstract/img8.jpeg",
    name: "Sandya Wijaya",
    description: "Masters Student at UC Berkeley",
    bio: "Sandya Wijaya is an incoming Masters student at UC Berkeley studying Industrial Engineering Operations Research. She recently finished her undergrad also at Berkeley in Data Science & Environmental Science. Sandya specializes in the intersection of tech & climate, finishing an honors thesis on using machine learning to predict effectiveness of plastic bans in Indonesia. She also has industrial experience in big tech as well as nonprofits alike including Meta, World Wildlife Fund, Greenpeace, and more. Sandya grew up in Jakarta, Indonesia.",
    id: 8,
  },
  {
    url: "/imgs/abstract/img9.jpeg",
    name: "Florencia Frans",
    description: "Trading Desk Operations Engineer at Jane Street Europe",
    bio: "Florencia is a Trading Desk Operations Engineer at Jane Street Europe. She is currently working in the Options Trading Desk. She graduated from Boston University in 2022 with a degree in Finance and Information Systems. She enjoys travelling and collecting postcards from all the places she has gone!", 
    id: 9, 
  },
  {
    url: "/imgs/abstract/img10.jpeg",
    name: "Christian Chonardo",
    description: "Seasoned Social Entrepreneur and Former McKinsey Consultant",
    bio: "Christian Chonardo is a seasoned social entrepreneur and former McKinsey consultant, with expertise in finance, product management, and social impact. He founded Teduh, a mental health startup recognized with a Google Play Store Award in 2023 for its significant impact in Indonesia. Currently, Christian serves as the Head of Business at Quantum, an AI and GovTech consultancy headquartered in Indonesia.",
    id: 10,
  },
  {
    url: "/imgs/abstract/img11.jpeg",
    name: "William Aditama",
    description: "Software Engineer at Salesforce",
    bio: "William Aditama is a Software Engineer at Salesforce. He graduated from UC Berkeley with a degree in Computer Science in 2020. He loves building tech products, and when he is not doing anything programming related, he enjoys golfing, travelling, and spending time with friends—new and old.",
    id: 11,
  },
  {
    url: "/imgs/abstract/img12.jpeg",
    name: "Alyssa Manik",
    description: "Incoming Associate Consultant at Bain & Company",
    bio: "Alyssa Manik is an incoming Associate Consultant at Bain & Company in the Jakarta Office. Previously, Alyssa worked on strategy at Suryanesia, a solar energy developer in Indonesia. Alyssa graduated from the University of Southern California with degrees in Business Administration and Accounting. In her free time, Alyssa enjoys making tea, reading, ballroom dancing, cooking, and travelling",
    id: 11,
  },
  {
    url: "/imgs/abstract/img13.jpeg",
    name: "Adiwid (Boom) Devahastin Na Ayudhya Boom",
    description: "Senior Analytics Engineer at Agoda",
    bio: "Adiwid (Boom) Devahastin Na Ayudhya Boom is a Senior Analytics Engineer at Agoda where  he works on the Product Supply Analytics team. He completed his undergraduate study in Economics and Mathematics from Cornell University, his MFin in Finance from the Massachusetts Institute of Technology, and his MSE in Data Science from the University of Pennsylvania. Boom began his career as a Quantitative Analyst at BlackRock in New York prior to pivoting to the tech industry where he has held roles at Netflix and start-ups prior to moving back home to Bangkok, Thailand. As a passionate advocate for mentoring, Boom has also taught coding and Data Science bootcamps at General Assembly and enjoys helping people reach their fullest potential!",
    id: 11,
  },
  {
    url: "/imgs/abstract/img14.jpeg",
    name: "Dharmadi Gusanto",
    description: "Investment professional at Alpha JWC Ventures",
    bio: "Dharmadi is an investment professional at Alpha JWC Ventures. He leads the end-to-e nd investment process and portfolio management. He holds a Bachelor's Degree in Business Management from University of Indonesia and graduated as top 1% of 2015 class. During his spare time, he loves to read non-fiction books & traveling. Recently, Dharmadi starts his running journey as a way to discover & express himself.",
    id: 11,
  },
  {
    url: "/imgs/abstract/img15.jpeg",
    name: "Patrick Tjandra",
    description: "Strategy Associate at Moladin",
    bio: "Patrick Tjandra is Strategy Associate at Moladin. In his previous roles, Patrick has worked in multiple early-stage biotech startups as a founding member and worked in multiple industries globally including consulting, biotech, and fintech. Patrick graduated from Stanford University majoring in Bioengineering. Outside of work, Patrick enjoys playing tennis, padel, gaming, and cooking.",
    id: 11,
  },
  {
    url: "/imgs/abstract/img16.jpeg",
    name: "Johan Sulaiman",
    description: "Head at Amazon Web Services Data & AI",
    bio: "Johan is currently Head for AWS Data & AI ASEAN Emerging Countries for Amazon Web Services. He is a proven business and technology executive who blends data &  technology with business savvy & organizational leadership. At Amazon, he is responsible for developing market penetration strategies and driving regional sales and adoptions of AWS' analytics services, leveraging his experiences in  envisioning and directing large scale analytics and machine learning programs, projects and teams for Fortune 500 companies. He is also a lifelong learner participating in education technology and data analytics R&D at Columbia University’s Programming Systems Lab.", 
  },
  {
    url: "/imgs/abstract/img17.jpeg",
    name: "Kristie Lim",
    description: "Software Engineer at OpenAI",
    bio: "Kristie Lim is a software engineer at OpenAI. Previously she worked at Rockset, a startup recently acquired by OpenAI. Kristie grew up in San Jose, California and studied computer science at the University of California, Los Angeles. Outside of work, she enjoys running, skiing, and listening to Taylor Swift. Catch her at an Olivia Rodrigo concert this year, or running her first marathon at the end of the summer!", 
  },
  {
    url: "/imgs/abstract/img18.jpeg",
    name: "Matt Sokoloff",
    description: "AI Engineer at Google",
    bio: "Matt Sokoloff is an AI Engineer at Google with a passion for using technology to solve real-world problems. His journey into the world of computer science began unexpectedly. While pursuing a finance degree, an internship in Silicon Valley sparked a fascination with programming, leading him to build his own deep learning computer. This hands-on experience fueled his expertise, ultimately inspiring him to earn a graduate degree in computer science. Matt's career path highlights his interest in applying machine learning to diverse fields. As an early employee at Arturo, an insurtech company spun out of American Family Insurance, he had the opportunity to develop models for analyzing property data from satellite and aerial imagery. Later, at Labelbox, he tackled challenges in large-scale data processing and analysis, playing a key role in shaping the platform's technical architecture.", 
  },


];

export default JudgesGrid;

// kristie lim, jana veliskova - headshot + bio 
// warren jodjana - bio 
