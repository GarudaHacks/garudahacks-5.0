"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

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

export default Example;

const cards = [
  {
    url: "/imgs/abstract/img1.jpeg",
    id: 1,
    title: "Title 1",
  },
  {
    url: "/imgs/abstract/img2.jpeg",
    id: 2,
    title: "Title 2",
  },
  {
    url: "/imgs/abstract/img3.jpeg",
    id: 3,
    title: "Title 3",
  },
  {
    url: "/imgs/abstract/img4.jpeg",
    id: 4,
    title: "Title 4",
  },
  {
    url: "/imgs/abstract/img5.jpeg",
    id: 5,
    title: "Title 5",
  },
  {
    url: "/imgs/abstract/img6.jpeg",
    id: 6,
    title: "Title 6",
  },
  {
    url: "/imgs/abstract/img7.jpeg",
    id: 7,
    title: "Title 7",
  },
];

