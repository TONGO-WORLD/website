"use client";

import Header from "@/ui/header";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const SLIDES = useMemo(
    () => [
      " Welcome to TONGO WORLD, a planet within a universe of flat planets, where a solitary egg holds the key to reviving the ancient TONagochi civilization. This journey is more than a game; it's a pioneering expedition brimming with possibilities. Your decisions and care routines directly influence the growth and future of the entire planet.",
      "TONGO WORLD combines blockchain technology, NFTs, and a play-to-earn model to engage users in a virtual pet care and battle system, reminiscent of games like Tamagotchi and Pokémon. The game is set on the planet TONGO, where players start with an egg that could revive the TONagochi civilization."
    ],
    []
  );
  return (
    <div className="w-screen flex flex-col justify-start items-center gap-4 animate-in fade-in-5 repeat-1 duration-75">
      <div
        className={clsx({
          "bg-[url('/images/frame_1.svg')]": activeSlide === 0,
          "bg-[url('/images/frame_2.svg')]": activeSlide === 1,
          "min-h-72 md:min-h-[1400px] w-full bg-cover bg-center flex flex-col gap-36 md:gap-40 bg-no-repeat": true
        })}
      >
        <Header />
        <div className="h-32 md:h-36 w-full" />
        <div className="bg-[#000] bg-opacity-60 min-h-6 w-full mt-auto flex justify-between items-center gap-5 px-8 py-8">
          <button
            disabled={activeSlide === 0}
            onClick={() => setActiveSlide(asl => asl - 1)}
            className="rounded-full flex justify-center items-center border border-[#fff] px-2 py-2 animate-ping repeat-infinite"
          >
            <FiArrowLeft size={20} color="#fff" />
          </button>
          <div className="flex flex-col justify-start items-center gap-4 md:w-1/2">
            <p
              className="text-[#fff] font-[500] text-xl md:text-2xl text-center w-full"
              dangerouslySetInnerHTML={{ __html: SLIDES[activeSlide] }}
            />
            <ul className="flex justify-center items-center gap-2 w-full">
              {SLIDES.map((_, index) => (
                <li key={index}>
                  <div
                    className={clsx({
                      "rounded-full w-4 h-4 md:w-6 md:h-6": true,
                      "bg-[#15889a]": index === activeSlide,
                      "bg-[#282828]": index !== activeSlide
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
          <button
            disabled={activeSlide === SLIDES.length - 1}
            onClick={() => setActiveSlide(asl => asl + 1)}
            className="rounded-full flex justify-center items-center border border-[#fff] px-2 py-2 animate-ping repeat-infinite"
          >
            <FiArrowRight size={20} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
