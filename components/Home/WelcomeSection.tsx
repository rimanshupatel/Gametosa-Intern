import React from "react";

export default function WelcomeSection() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#1f0a2e,_#000)] animate-gradient-shift text-white px-4 md:px-12 py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome To <span className="text-cyan-500">MATRIX</span>
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
            <button className="bg-cyan-400/80 text-white px-6 py-2 rounded font-semibold shadow hover:bg-cyan-600 transition-all">
              View More
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/welcomeClip.png"
              alt="Game Controllers"
              className="w-[400px] md:w-[450px] drop-shadow-[0_0_150px_rgba(34,211,238,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
