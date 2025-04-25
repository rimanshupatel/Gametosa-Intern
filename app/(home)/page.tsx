import React from "react";
import HomeCarousel from "@/components/Home/HomeCarousel";
import HeroSection from "@/components/Home/HeroSection";
import Container from "@/components/ui/Container";
import WelcomeSection from "@/components/Home/WelcomeSection";
import Partner from "@/components/Home/partners/Partner";
import MatrixTitle from "@/components/Home/Matrix";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <MatrixTitle />
      <HeroSection />
      <WelcomeSection />
      <Partner />
    </>
  );
}
