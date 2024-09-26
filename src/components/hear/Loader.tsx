import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const clutterAnimation = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    const text = element.textContent;
    element.innerHTML = "";
    text?.split("").forEach((char) => {
      element.innerHTML += `<span>${char}</span>`;
    });
  }
};

const Loader: React.FC = () => {
  const loaderTextRef = useRef<HTMLHeadingElement>(null);
  const loaderProgressRef = useRef<HTMLDivElement>(null);
  const loaderC1Ref = useRef<HTMLDivElement>(null);
  const mainLoaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });

    if (loaderTextRef.current) {
      clutterAnimation(".loader-text>h1");
      tl.from(".loader-text>h1>span", {
        opacity: 0,
        filter: "blur(10px)",
        stagger: {
          amount: 1,
          from: "start",
        },
      });
    }

    if (loaderProgressRef.current) {
      gsap.to(loaderProgressRef.current, {
        width: "100%",
        duration: 4,
        onComplete: () => {
          const completionTl = gsap.timeline();
          if (loaderC1Ref.current && mainLoaderRef.current) {
            completionTl
              .to(loaderC1Ref.current, {
                top: "-100%",
              })
              .to(mainLoaderRef.current, {
                top: "-100%",
              })
              .from("#navbar", {
                y: "-130",
                duration: 0.7,
              })
              .from("#overlay-p1 h1, #overlay-p1 h2, #overlay-p1 p", {
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.7,
              });
          }
        },
      });
    }
  });

  return (
    <>
      <div
        ref={loaderC1Ref}
        className="absolute top-full left-0 h-full w-full z-[100] bg-[#4285f4]"
      ></div>
      <div
        ref={mainLoaderRef}
        className="fixed h-screen w-full bg-white top-0 left-0 z-[99] font-[reg] flex justify-center items-center flex-col"
      >
        <div className="loader-text">
          <h1
            ref={loaderTextRef}
            className="relative text-[5vw] text-[#4285f4]"
          >
            HeAR
          </h1>
          <div className="relative w-[13vw] h-[3px] mt-[2vw]">
            <div
              ref={loaderProgressRef}
              className="relative w-0 h-full bg-[#4285f4]"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
