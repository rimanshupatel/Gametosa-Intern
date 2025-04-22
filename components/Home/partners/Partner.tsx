import { InfiniteMovingImages } from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function Partner() {
  const partnerImages = [
    {
      src: "https://gametosa.com/img/gcforstartup.png",
      alt: "Google for Startups Cloud Program",
      width: 160,
      height: 200,
    },
    {
      src: "https://gametosa.com/img/bwubi.png",
      alt: "Brainware Incubation",
      width: 160,
      height: 100,
    },
    {
      src: "https://gametosa.com/img/nvidia-inception-program-badge-rgb-for-screen.jpg",
      alt: "Nvidia Inception",
      width: 160,
      height: 200,
    },
    {
      src: "https://gametosa.com/img/msforstartupw.png",
      alt: "Microsoft For Startup",
      width: 160,
      height: 200,
    },
    {
      src: "https://gametosa.com/img/dpiit.png",
      alt: "DPIIT",
      width: 160,
      height: 200,
      className: "bg-white rounded-[5%]", // Additional styling
    },
    {
      src: "https://gametosa.com/img/startupindia.png",
      alt: "Startup India",
      width: 160,
      height: 200,
    },
    {
      src: "https://gametosa.com/img/stpiimage.png",
      alt: "STPI IMAGE",
      width: 160,
      height: 200,
      className: "bg-white rounded-[5%]",
    },
    {
      src: "https://gametosa.com/img/stpi.png",
      alt: "STPI",
      width: 160,
      height: 200,
    },
  ];
  const linkedPartnerImages = [
    {
      src: "https://gametosa.com/store/img/gauravgo.png",
      alt: "",
      href: "https://gauravgo.com",
      width: "auto", // You can add specific width if needed
      height: "auto", // You can add specific height if needed
    },
    {
      src: "https://gametosa.com/store/img/narqubisblue.png",
      alt: "",
      href: "https://narqubis.com",
      width: "auto",
      height: "auto",
    },
    {
      src: "https://gametosa.com/store/img/xsquads.png",
      alt: "",
      href: "https://xsquads.com",
      width: "auto",
      height: "auto",
    },
    {
      src: "https://gametosa.com/store/img/metashot.png",
      alt: "",
      href: "https://metashot.in",
      width: "auto",
      height: "auto",
    },
    {
      src: "https://gametosa.com/store/img/sherlock.png",
      alt: "",
      href: "https://sherlockstudio.in",
      width: "auto",
      height: "auto",
    },
    {
      text: "and more...",
      href: "",
    },
  ];
  return (
    <section>
      <InfiniteMovingImages
        images={partnerImages.map((img) => img.src)}
        direction="left"
        speed="normal"
        className="py-8"
      />
      <InfiniteMovingImages
        images={linkedPartnerImages.map((img) => img.src)}
        direction="right"
        speed="fast"
        className="py-8"
      />
    </section>
  );
}
