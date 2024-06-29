"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-black">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <h2 className="text-white text-center text-3xl font-bold pb-0">Judges</h2>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/img1.jpeg",
    id: 1,
  },
  {
    url: "/imgs/abstract/img2.jpeg",
    id: 2,
  },
  {
    url: "/imgs/abstract/img3.jpeg",
    id: 3,
  },
  {
    url: "/imgs/abstract/img4.jpeg",
    id: 4,
  },
  {
    url: "/imgs/abstract/img5.jpeg",
    id: 5,
  },
  {
    url: "/imgs/abstract/img6.jpeg",
    id: 6,
  },
  {
    url: "/imgs/abstract/img7.jpeg",
    id: 7,
  },
];
