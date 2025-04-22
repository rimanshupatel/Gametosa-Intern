import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import HomeCarousel from "@/components/Home/HomeCarousel";
import HeroSection from "@/components/Home/HeroSection";
import Container from "@/components/ui/Container";
import WelcomeSection from "@/components/Home/WelcomeSection";
import Partner from "@/components/Home/partners/Partner";
import MatrixTitle from "@/components/Home/Matrix";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <MatrixTitle />
      <HeroSection />
      <WelcomeSection />
      <Partner />
      <Footer />
    </>
  );
}
