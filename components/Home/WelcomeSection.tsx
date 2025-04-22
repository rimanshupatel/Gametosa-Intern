import React from "react";

const partners = [
  "BNB CHAIN",
  "Morningstar Ventures",
  "CoinMarketCap",
  "Acheron Trading",
  "MuleSoft",
  "Valhalla Capital",
  "EnjinStarter",
  "SEDULO",
  "Venly",
  "Results.io",
];

export default function WelcomeSection() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#1f0a2e,_#000)] animate-gradient-shift text-white px-4 md:px-12 py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome To <span className="text-cyan-500">QubeStat</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
          With More Than 3 Billion Active Gamers Globally Set To Transition Into
          The New Exciting World Of Web3 Gaming, GAIMIN’s Innovative Technology
          Solutions Mean The GAIMIN Project is Set To
        </p>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:pl-4">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
              Why Gamers Are The Key To Mass Web3 Adoption
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base max-w-md">
              Web3 Technology Represents A Significant Shift In The Gaming
              Industry, Creating A More Inclusive, Engaging, And Rewarding
              Gaming Experience For Both Players And Developers
            </p>
            <button className="bg-[#f03eb3] text-white px-6 py-2 rounded font-semibold shadow hover:bg-pink-600 transition-all">
              View More
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/welcomeClip.png"
              alt="Game Controllers"
              className="w-[400px] md:w-[450px] drop-shadow-[0_0_100px_rgba(240,62,179,0.5)]"
            />
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Our <span className="text-cyan-400">Partners</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-center items-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-[#1b132e] text-white text-center py-4 px-3 rounded-lg shadow-md h-16 flex items-center justify-center text-sm font-medium border border-[#2b2544] hover:scale-105 transition-transform"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
