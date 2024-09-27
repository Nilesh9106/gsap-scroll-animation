import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page7: React.FC = () => {
  useGSAP(() => {
    const text = gsap.timeline({
      scrollTrigger: {
        trigger: "#page7",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
    });
    text.from("#page7 .page7-text", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
    });
    text.from("#page7 .page7-container>h3 , #page7 .page7-container>p", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: "#page7",
        start: "0% 0%",
        end: "150% 0%",
        scrub: true,
        pin: true,
      },
    });
    tl.to("#page7 .page7-elem", {
      width: "24%",
      stagger: 0.1,
      backgroundColor: "#e2ffdf",
      color: "#07003f",
    });
  });
  return (
    <div id="page7" className="relative h-screen w-full p-8 bg-white">
      <div className="page7-text">
        <h3 className="font-semibold">Advantages</h3>
        <h1 className="text-[4vw] w-[90%]">
          Launching In Healthcare For Advantages
        </h1>
      </div>
      <div className="page7-container relative w-full mt-16">
        <h3 className="relative font-medium">BRIEF</h3>
        <p className="relative text-[1.2vw] mt-2 font-semibold">
          Here are four advantages of using Hear for tuberculosis (TB)
          detection:
        </p>
        <div className="page7-container-elems relative w-full flex gap-4 h-[45vh] mt-8">
          <div className="page7-elem1 page7-elem relative p-8 text-white rounded-[1vw] flex-shrink-0 flex flex-col justify-between bg-[#217bfe] w-full h-full">
            <h1 className="text-[2vw] whitespace-nowrap">Early Detection</h1>
            <p className="text-[1vw] w-56 mt-4">
              Hear&apos;s advanced AI technology enables the early
              identification of tuberculosis (TB)
            </p>
          </div>
          <div className="page7-elem2 page7-elem relative p-8 text-white rounded-[1vw] flex-shrink-0 flex flex-col justify-between bg-[#217bfe] w-1/2">
            <h1 className="text-[2vw] whitespace-nowrap">
              Reduced Misdiagnosis
            </h1>
            <p className="text-[1vw] w-56 mt-4">
              By accurately analyzing cough patterns and other audio indicators,
            </p>
          </div>
          <div className="page7-elem3 page7-elem relative p-8 text-white rounded-[1vw] flex-shrink-0 flex flex-col justify-between bg-[#217bfe] w-1/2">
            <h1 className="text-[2vw] whitespace-nowrap">Non-Invasive</h1>
            <p className="text-[1vw] w-56 mt-4">
              Hear provides a non-invasive method for monitoring patients,
              making it easier
            </p>
          </div>
          <div className="page7-elem4 page7-elem relative p-8 text-white rounded-[1vw] flex-shrink-0 flex flex-col justify-between bg-[#217bfe] w-1/2">
            <h1 className="text-[2vw] whitespace-nowrap">Improved Accuracy</h1>
            <p className="text-[1vw] w-56 mt-4">
              With its sophisticated algorithms, Hear enhances diagnostic
              accuracy by filtering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
