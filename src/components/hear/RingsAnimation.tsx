import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RingsComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    setTimeout(() => {
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: "body",
          start: "-20% 00%",
          end: "30% 00%",
          // pin: true,
          scrub: 2,
          // markers: true,
        },
      });
      tl6
        .from(bigRef.current, {
          width: "0vw",
          height: "0vw",
        })
        .from(smallRef.current, {
          width: "0vw",
          height: "0vw",
          delay: -0.2,
        });
    }, 1000);
  });
  return (
    <div
      id="rings-container"
      ref={containerRef}
      className="relative h-[130vh] overflow-hidden w-full bg-black flex flex-col items-center justify-center pt-[5vw]"
    >
      <div
        id="line-hide"
        className="w-full h-[3vw] bg-black absolute z-10 left-0 top-[-4%]"
      ></div>
      <div
        id="small-ring"
        ref={smallRef}
        className="absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] animate-[rotate_18s_linear_infinite]"
      >
        <svg
          viewBox="0 0 1093 1093"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="546.725"
            cy="546.323"
            r="545.35"
            transform="rotate(-90 546.725 546.323)"
            stroke="url(#paint0_linear_22755_2414)"
            strokeLinecap="round"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_22755_2414"
              x1="305.921"
              y1="-59.7338"
              x2="838.118"
              y2="1031.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A8BFFF"></stop>
              <stop offset="0.185" stopColor="#A8BFFF" stopOpacity="0"></stop>
              <stop offset="0.385" stopColor="#A8BFFF"></stop>
              <stop offset="0.575" stopColor="#A8BFFF" stopOpacity="0"></stop>
              <stop offset="0.79" stopColor="#A8BFFF" stopOpacity="0.5"></stop>
              <stop offset="1" stopColor="#A8BFFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        id="large-ring"
        ref={bigRef}
        className="absolute top-1/2 left-1/2 transform pointer-events-none  -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] animate-[rotate_18s_linear_infinite_reverse]"
      >
        <svg
          viewBox="0 0 1093 1093"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="546.725"
            cy="546.323"
            r="545.35"
            transform="rotate(-90 546.725 546.323)"
            stroke="url(#paint0_linear_22755_2414)"
            strokeLinecap="round"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_22755_2414"
              x1="305.921"
              y1="-59.7338"
              x2="838.118"
              y2="1031.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A8BFFF"></stop>
              <stop offset="0.185" stopColor="#A8BFFF" stopOpacity="0"></stop>
              <stop offset="0.385" stopColor="#A8BFFF"></stop>
              <stop offset="0.575" stopColor="#A8BFFF" stopOpacity="0"></stop>
              <stop offset="0.79" stopColor="#A8BFFF" stopOpacity="0.5"></stop>
              <stop offset="1" stopColor="#A8BFFF" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Image
        id="logor"
        src="/imgs/Vector.png"
        alt="Vector"
        width={300}
        height={300}
        className="w-[5vw] mb-[2vw]"
      />
      <h1 className="text-white text-[3vw] font-normal mb-2">
        Innovating health care
      </h1>
      <h1 className="text-white text-[3vw] font-normal">AI through HeAR</h1>
      <p className="text-white w-[30%] text-center my-[1.5vw]">
        Hear is a state-of-the-art AI tool designed to decode and interpret
        audio data with unprecedented precision.
      </p>
      <div
        id="ring-btn"
        className="bg-gradient-to-br from-[#3c4ef3] to-[#182ef3] text-white py-[1.3vw] px-[4vw] rounded-full cursor-pointer"
      >
        <h5 className="font-medium">Learn More</h5>
      </div>
    </div>
  );
};

export default RingsComponent;
