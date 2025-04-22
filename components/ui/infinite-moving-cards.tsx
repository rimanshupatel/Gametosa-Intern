"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type ImageItem =
  | string
  | {
      src: string;
      alt?: string;
      href?: string;
      width?: number | string;
      height?: number | string;
      className?: string;
    };

export const InfiniteMovingImages = ({
  images,
  direction,
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  images: ImageItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  const renderImage = (item: ImageItem, idx: number) => {
    if (typeof item === "string") {
      return (
        <li
          className="relative w-[200px] shrink-0 rounded-lg overflow-hidden "
          key={`${item}-${idx}`}
        >
          <img
            src={item}
            alt=""
            className="w-full h-full object-contain"
            width={200}
            height={200}
          />
        </li>
      );
    }

    const imageElement = (
      <img
        src={item.src}
        alt={item.alt || ""}
        className={cn("w-full h-full object-contain", item.className)}
        width={typeof item.width === "number" ? item.width : 200}
        height={typeof item.height === "number" ? item.height : 200}
      />
    );

    return (
      <li
        className={cn(
          "relative shrink-0 rounded-lg overflow-hidden",
          typeof item.width === "string" ? item.width : "w-[200px]"
        )}
        key={`${item.src}-${idx}`}
      >
        {item.href ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {imageElement}
          </a>
        ) : (
          imageElement
        )}
      </li>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 items-center ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {images.map((img, idx) => renderImage(img, idx))}
      </ul>
    </div>
  );
};
