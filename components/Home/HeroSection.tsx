import React from "react";
import Image from "next/image"; // If using Next.js
import GlitchButton from "../ui/GlitchButton";

const HeroSection = () => {
  return (
    <section className=" text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 space-x-0.5 w-50%">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Turn Your <span className="text-cyan-400">Passion</span>
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Into Your <span className="text-cyan-400">Carrier!</span>
          </h1>

          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Get started With Us Today
          </h1>
          <p className="text-lg text-gray-300">
            Grow in an Esports ecosystem with gamers & organizers alike
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              For Organizers
            </button>
            <GlitchButton text="creator" />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
            {/* Using MAIN-Png from public folder */}
            <Image
              src="/MAIN-Png.webp" // Make sure this matches your file name exactly
              alt="Esports career opportunities"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
