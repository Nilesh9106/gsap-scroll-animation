import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Page3 = () => {
  const lowerRef = useRef<HTMLDivElement>(null);
  const upperRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: upperRef.current!,
        start: "top 30%",
        end: "top -20%",
        scrub: true,
        // markers: true,
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: lowerRef.current!,
        start: "top 30%",
        end: "top -20%",
        scrub: true,
        // markers: true,
      },
    });
    t1.from("#pg3-upper h1,#pg3-upper h5", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
    });
    t2.from("#pg3-lower h1, #pg3-lower h5", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
    });
  });
  return (
    <div id="page3" className="relative w-full h-[200vh] bg-white">
      <div
        id="pg3-upper"
        ref={upperRef}
        className="relative flex w-full h-1/2 p-[3vw_2vw] gap-[6vw]"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h1 className="text-[2.5vw] font-medium">Our Motive To</h1>
            <h1 className="text-[2.5vw] font-medium text-[#3f78fb]">
              Embrace Health
            </h1>
          </div>
          <div>
            <h1 className="text-[4vw] font-medium leading-tight">
              People deserve to live
            </h1>
            <h1 className="text-[4vw] font-medium leading-tight">
              their lives to the
            </h1>
            <h1 className="text-[4vw] font-medium leading-tight mb-[1vw]">
              fullest
            </h1>
            <h5 className="text-[1vw] font-semibold text-[#5f6368]">
              By focusing on the root cause of disease we have the
            </h5>
            <h5 className="text-[1vw] font-semibold text-[#5f6368]">
              opportunity to prevent the onset of disease
            </h5>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full rounded-lg overflow-hidden relative">
          <Image
            src="/imgs/pg3_1.jpeg"
            alt="Health"
            width={500}
            height={500}
            className="object-cover webgl rounded-[1vw] w-full h-full"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div
        id="pg3-lower"
        ref={lowerRef}
        className="relative flex w-full h-1/2 p-[3vw_2vw] gap-[6vw] pt-0"
      >
        {/* Left Section */}
        <div className="w-1/2 h-full rounded-lg overflow-hidden relative">
          <Image
            src="/imgs/pg3_2.jpeg"
            alt="Transform Health"
            width={500}
            height={500}
            className="rounded-[1vw] webgl object-cover w-full h-full"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h1 className="text-[2.5vw] font-medium">Our Motive To</h1>
            <h1 className="text-[2.5vw] font-medium text-[#3f78fb]">
              Transform Health
            </h1>
          </div>
          <div>
            <h1 className="text-[4vw] font-medium leading-tight">
              Transforming the
            </h1>
            <h1 className="text-[4vw] font-medium leading-tight">
              approach to AI
            </h1>
            <h1 className="text-[4vw] font-medium leading-tight mb-[1vw]">
              medicare
            </h1>
            <h5 className="text-[1vw] font-semibold text-[#5f6368]">
              We are bringing novel, first in class diagnostics to the
            </h5>
            <h5 className="text-[1vw] font-semibold text-[#5f6368]">
              market through revolutionary approach
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
