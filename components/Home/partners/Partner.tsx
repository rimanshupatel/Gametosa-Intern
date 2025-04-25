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
      width: 100,
      height: 100,
    },
    {
      src: "https://gametosa.com/img/nvidia-inception-program-badge-rgb-for-screen.jpg",
      alt: "Nvidia Inception",
      width: 160,
      height: 220,
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
      width: 180,
      height: 250,
    },
    {
      src: "https://gametosa.com/img/stpiimage.png",
      alt: "STPI IMAGE",
      width: 160,
      height: 150,
      className: "bg-white rounded-[5%]",
    },
    {
      src: "https://gametosa.com/img/stpi.png",
      alt: "STPI",
      width: 150,
      height: 100,
    },
  ];
  const linkedPartnerImages = [
    {
      src: "https://gametosa.com/store/img/gauravgo.png",
      alt: "",
      href: "https://gauravgo.com",
      width: 100,
      height: 100,
    },
    {
      src: "https://gametosa.com/store/img/narqubisblue.png",
      alt: "",
      href: "https://narqubis.com",
      width: 200,
      height: 150,
    },
    {
      src: "https://gametosa.com/store/img/xsquads.png",
      alt: "",
      href: "https://xsquads.com",
      width: 200,
      height: 150,
    },
    {
      src: "https://gametosa.com/store/img/metashot.png",
      alt: "",
      href: "https://metashot.in",
      width: 150,
      height: 100,
    },
    {
      src: "https://gametosa.com/store/img/sherlock.png",
      alt: "",
      href: "https://sherlockstudio.in",
      width: 150,
      height: 100,
    },
  ];
  return (
    <section
      className="py-8 bg-[radial-gradient(ellipse_at_center,rgba(10,30,80,0.6)_0%,rgba(0,0,0,0)_80%)] backdrop-blur-[1px]

 flex flex-col justify-center items-center "
    >
      <div className="">
        <h1 className="text-5xl font-bold capitalize text-cyan-500">
          Powered by
        </h1>
        <InfiniteMovingImages
          images={partnerImages}
          direction="left"
          speed="fast"
          className="py-8"
        />
      </div>
      <div className="">
        <h1 className="text-5xl font-bold capitalize text-cyan-500">
          backed by
        </h1>
        <InfiniteMovingImages
          images={linkedPartnerImages}
          direction="right"
          speed="fast"
          className="py-8"
        />
      </div>
    </section>
  );
}
