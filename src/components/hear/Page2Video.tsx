import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Page2Video = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          scroller: "body",
          trigger: ref.current,
          start: "top 85%",
          end: "top 0%",
        },
      });
      tl.to("#page2>video", {
        width: "100%",
      });
    }
  });
  return (
    <div
      ref={ref}
      id="page2"
      className="h-screen w-full overflow-hidden flex justify-center items-center bg-white"
    >
      <video
        autoPlay
        loop
        muted
        src="/videos/page2_video.mp4"
        className="h-full w-3/4 rounded-3xl object-cover"
      ></video>
    </div>
  );
};

export default Page2Video;
