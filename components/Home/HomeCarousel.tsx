"use client";
// import homeBanner from "../../assets/home-banner.png";
import Container from "../ui/Container";
// import LinkButton from "./LinkButton";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "@/constants/HomeCarousel";
import Image from "next/image";
import { Meteors } from "../magicui/meteors";
import { Particles } from "../magicui/particles";
const HomeCarousel = () => {
  const items = HomeCarouselData.map((items) => (
    <Image
      src={items.image}
      alt=""
      className="cursor-pointer mouseTracking  w-full h-full object-cover rounded-md"
    />
  ));
  return (
    <div className="z-50">
      <Particles className="absolute" />
      <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        autoPlay
        autoPlayInterval={1500}
        infinite
        disableButtonsControls
        animationType="slide"
      />
    </div>
  );
};

export default HomeCarousel;
