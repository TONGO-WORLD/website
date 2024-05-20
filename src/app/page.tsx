"use client";

import Header from "@/ui/header";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const SLIDES = useMemo(
    () => [
      " Welcome to TONGO WORLD, a planet within a universe of flat planets, where a solitary egg holds the key to reviving the ancient TONagochi civilization. This journey is more than a game; it's a pioneering expedition brimming with possibilities. Your decisions and care routines directly influence the growth and future of the entire planet.",
      "TONGO WORLD combines blockchain technology, NFTs, and a play-to-earn model to engage users in a virtual pet care and battle system, reminiscent of games like Tamagotchi and Pokémon. The game is set on the planet TONGO, where players start with an egg that could revive the TONagochi civilization.",
      `<div class="flex flex-col justify-start items-start gap-3 w-full">
      <h3 class="font-[500]">Key features</h3>
      <ul class="list-disc flex flex-col justify-start items-start text-justify">
      <li>The game utilizes TON blockchain for secure transactions, and true ownership of in-game assets.</li>
      <li>The game features an innovative economic model where players can earn through gameplay, trading, and participating in community events.</li>
      </ul>
      </div>`,
      `<div class="flex flex-col justify-start items-start gap-3 w-full">
      <ul class="list-disc flex flex-col justify-start items-start text-justify">
      <li>TONGO WORLD has its own token, $TOGI, which is integral to the game’s economy. Players earn $TOGI through gameplay, which can be used within the ecosystem or traded.</li>
      <li>Community Rewards: A significant portion of the game’s revenue and tokens are allocated to reward pools for distribution among players.</li>
      </ul>
      </div>`,
      `<div class="flex flex-col justify-start items-start gap-3 w-full">
      <ul class="list-disc flex flex-col justify-start items-start text-justify">
      <li>Creature Development: Creatures, or TONagotchis, evolve from eggs and can be enhanced using elemental tokens specific to their nature (e.g., fire, water, air).</li>
      <li>Battles and Tournaments: Players engage in strategic battles using creature cards, with the potential to earn rewards and recognition within the community.</li>
      </ul>
      </div>`,
      `<div class="flex flex-col justify-start items-start gap-3 w-full">
      <h3 class="font-[500]">Community development</h3>
      <ul class="list-disc flex flex-col justify-start items-start text-justify">
      <li>Collaborative Growth: The game emphasizes community-driven development where player feedback directly influences game updates and features.</li>
      <li>Inclusive Strategy: Aimed at both blockchain enthusiasts and traditional gamers, facilitating a broader adoption of blockchain technology.</li>
      </ul>
      </div>`
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSlide === SLIDES.length - 1) setActiveSlide(0);
      else setActiveSlide(asl => asl + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [SLIDES.length, activeSlide]);

  return (
    <div className="w-screen flex flex-col justify-start items-center gap-4 animate-jump-in animate-delay-500 animate-once transition-all duration-500 ease-in-out overflow-x-hidden">
      <section
        className={clsx({
          "bg-[url('/images/frame_1.svg')]": activeSlide === 0,
          "bg-[url('/images/frame_2.svg')]": activeSlide === 1,
          "bg-[url('/images/frame_3.svg')]": activeSlide === 2,
          "bg-[url('/images/frame_4.svg')]": activeSlide === 3,
          "bg-[url('/images/frame_5.svg')]": activeSlide === 4,
          "bg-[url('/images/frame_6.svg')]": activeSlide === 5,
          "w-full bg-cover bg-center flex flex-col gap-36 md:gap-40 bg-no-repeat": true
        })}
      >
        <Header />
        <div className="h-32 md:min-h-[500px] w-full" />
        <div className="bg-[#000] bg-opacity-80 min-h-6 w-full mt-auto flex justify-between items-center gap-5 px-8 py-8">
          <button
            disabled={activeSlide === 0}
            onClick={() => setActiveSlide(asl => asl - 1)}
            className="rounded-full flex justify-center items-center border border-[#fff] px-4 py-4"
          >
            <FiArrowLeft size={20} color="#fff" className="animate-ping animate-ease-out" />
          </button>
          <div className="flex flex-col justify-start items-center gap-4 md:w-1/2">
            <p
              className="text-[#fff] font-medium text-xl md:text-2xl text-center w-full"
              dangerouslySetInnerHTML={{ __html: SLIDES[activeSlide] }}
            />
            <ul className="flex justify-center items-center gap-2 w-full">
              {SLIDES.map((_, index) => (
                <li key={index}>
                  <div
                    onClick={() => setActiveSlide(index)}
                    className={clsx({
                      "rounded-full w-4 h-4 md:w-6 md:h-6 cursor-pointer transition-all duration-500 ease-in-out": true,
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
            className="rounded-full flex justify-center items-center border border-[#fff] px-4 py-4"
          >
            <FiArrowRight size={20} color="#fff" className="animate-ping animate-infinite animate-ease-out" />
          </button>
        </div>
      </section>
      <section className="bg-[#000] w-full flex flex-col justify-start items-center py-6 md:py-10 px-3 md:px-6 gap-10">
        <h3 className="text-[#656566] font-light text-2xl md:text-4xl text-center">
          All powered by the TON blockchain
        </h3>
        <a className="bg-[linear-gradient(#15889a,_#072e34)] rounded-[8px] flex justify-center items-center px-4 md:px-16 py-4 shadow-sm shadow-[#15889a] w-[90%] md:w-1/5">
          <span className="text-[#f5f5f5] text-sm md:text-lg capitalize font-semibold animate-pulse animate-infinite animate-ease-linear">play now</span>
        </a>
      </section>
    </div>
  );
};

export default Home;
