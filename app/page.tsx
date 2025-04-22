import Image from "next/image";

import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import HomeCarousel from "@/components/Home/HomeCarousel";
import HeroSection from "@/components/Home/HeroSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Container from "@/components/ui/Container";
import QuabStatTitle from "@/components/Home/QuabStatTitle";

const testimonials = [
  {
    quote: "This is the first testimonial",
    name: "John Doe",
    title: "CEO at Company",
  },
  {
    quote: "Another great testimonial",
    name: "Jane Smith",
    title: "Marketing Director",
  },
  // Add more items as needed
];
export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Container>
        <HeroSection />
        <QuabStatTitle />
        <InfiniteMovingCards items={testimonials} />
      </Container>
      <Footer />
    </>
  );
}
