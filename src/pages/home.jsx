import React from "react";
import homebannerimage from "../assets/Images/banner.jpg";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={homebannerimage}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-10">

          <div className="mt-15 max-w-4xl">

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              GLOBAL SOURCING & <br />
              SCRAP TRADING MADE SIMPLE
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Your trusted international partner for B2B industrial trading,
              scrap metals, charcoal products, and end-to-end product sourcing
              across 50+ countries.
            </p>

            {/* Buttons Row */}
            <div className="mt-10 flex flex-wrap items-center gap-5">

              {/* Buy */}
              <button className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-orange-500
        hover:shadow-[0_10px_30px_rgba(255,115,0,0.35)]
      ">
                I WANT TO BUY
              </button>

              {/* Sell */}
              <button className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:bg-blue-500
        hover:shadow-[0_10px_30px_rgba(59,130,246,0.35)]
      ">
                I WANT TO SELL
              </button>

              {/* Source Product */}
              <button className="
        rounded-2xl
        bg-orange-500
        px-8
        py-4
        text-lg
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        hover:bg-orange-600
        hover:shadow-[0_10px_30px_rgba(255,115,0,0.45)]
      ">
                SOURCE PRODUCT FOR ME
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}