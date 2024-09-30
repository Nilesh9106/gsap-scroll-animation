"use client";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import {
  BotIcon,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import NextImage from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

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

const Page1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#navbar", { y: -100, opacity: 0, duration: 1 });
    tl.from(".op", { opacity: 0, duration: 1, stagger: 0 });
  });
  return (
    <div className="h-screen w-full bg-white overflow-hidden">
      <div className="relative h-full w-full p-4 text-center">
        <div
          className="flex items-center justify-between w-full p-6 bg-white/90 rounded-lg shadow-md"
          id="navbar"
        >
          <NextImage
            className="w-9"
            src="/imgs/Frame 49.png"
            alt="Logo"
            width={40}
            height={40}
            id="logom"
          />
          <div
            className="flex items-center gap-8 text-lg capitalize"
            id="nav-p1"
          >
            {[
              "home",
              "What is hear",
              "Sound for Clinicians",
              "Why Hear",
              "AI Assistance",
              "How It Was Built",
              "Advantages",
              "Contact Us",
            ].map((item) => (
              <h4
                key={item}
                className="transition-all ease-in-out duration-500 hover:text-blue-600 cursor-pointer font-medium"
              >
                {item}
              </h4>
            ))}
          </div>
          <div className="flex items-center gap-4" id="nav-p2">
            <h4 className="font-medium">Search</h4>
          </div>
        </div>
        <NextImage
          className="absolute left-[-10%] top-1/2 w-1/5 transform rotate-[-30deg]"
          src="/imgs/3D Image - 12.png"
          alt="Left Ring"
          width={300}
          height={300}
          id="leftring"
        />
        <NextImage
          className="absolute right-[-15%] top-1/4 w-1/3 transform rotate-[-50deg]"
          src="/imgs/3D Image - 11.png"
          alt="Right Ring"
          width={400}
          height={400}
          id="rightring"
        />
        <h1 className="mt-8 op text-5xl font-semibold text-blue-600">
          Transforming Cough Sounds
        </h1>
        <h2 className="text-5xl op font-semibold mt-3 text-blue-600">
          into Diagnostic Insights
        </h2>
        <p className="mt-4 op text-gray-500 font-light text-lg w-1/3 mx-auto">
          At Hear, we’re revolutionizing healthcare with AI that analyzes cough
          sounds for early diagnosis.
        </p>
        <Spline
          className="z-10 -mt-10"
          scene="https://prod.spline.design/n5pPogRw2nHA4SIc/scene.splinecode"
        />
      </div>
    </div>
  );
};

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
          <NextImage
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
          <NextImage
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

const Page5 = () => {
  const cardData = [
    {
      id: "card1",
      bgColor: "bg-[#fff6df]",
      icon: "user",
      text: [
        "Tuberculosis (TB) is a leading cause of death worldwide. Early",
        "detection and timely intervention can significantly delay disease",
        "progression and reduce mortality rates.",
      ],
      subHead: ["1.1 million people died of tuberculosis", "(TB) last year"],
      heading: [
        "<span className='text-[#3771fc]'>Hear's early detection</span>",
        "can provide timely",
        "insights and potentially",
        "save lives.",
      ],
      video: "/videos/drop-svg-final_2.mp4",
    },
    {
      id: "card2",
      bgColor: "bg-[#e2ffdf]",
      icon: "user",
      text: [
        "Current TB diagnostic options often have high false",
        "positive rates and can yield inaccurate results influenced",
        "by factors like diet and hemoglobin levels.",
      ],
      heading: [
        "1/3 people can be",
        "diagnosed eyery day",
        "with <span className='text-[#3771fc]'>HeAR AI</span>",
      ],
      video: "/videos/smile-svg_final.mp4",
    },
    {
      id: "card3",
      bgColor: "bg-[#ffdfdf]",
      icon: "user",
      text: [
        "25% of children with tuberculosis (TB) are initially",
        "misdiagnosed, increasing complications; early detection",
        "with Hear can help reduce mortality",
      ],
      heading: [
        "Hear AI <span className='text-[#3771fc]'>can save 25%</span> of",
        "children misdiagnosed",
        "with tuberculosis (TB).",
      ],
      video: "/videos/people-svg-final_1.mp4",
    },
  ];
  useGSAP(() => {
    gsap.from("#pg5-header h1", {
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 1,
      },
    });

    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        start: "0% 0%",
        end: "200% 0%",
        pin: true,
        scrub: 2,
        // markers: true
      },
    });

    tl5
      .to(
        "#page5 #card3",
        {
          opacity: 0,
        },
        "aa"
      )
      .to(
        "#page5 #circle-1",
        {
          backgroundColor: "transparent",
        },
        "aa"
      )
      .to(
        "#page5 #circle-2",
        {
          backgroundColor: "#000",
        },
        "aa"
      )
      .from(
        "#page5 #card2 .text-div h5",
        {
          transform: "translateY(100%)",
        },
        "a"
      )
      .from(
        "#page5 #card2 #video",
        {
          opacity: 0,
        },
        "a"
      )
      .from(
        "#page5 #card2 .head-div h1",
        {
          transform: "translateY(100%)",
        },
        "a"
      )
      .to(
        "#page5 #card2",
        {
          opacity: 0,
        },
        "bb"
      )
      .to(
        "#page5 #circle-2",
        {
          backgroundColor: "transparent",
        },
        "bb"
      )
      .to(
        "#page5 #circle-3",
        {
          backgroundColor: "#000",
        },
        "bb"
      )
      .from(
        "#page5 #card1 .text-div h5",
        {
          transform: "translateY(100%)",
        },
        "b"
      )
      .from(
        "#page5 #card1 #video",
        {
          opacity: 0,
        },
        "b"
      )
      .from(
        "#page5 #card1 .head-div h1",
        {
          transform: "translateY(100%)",
        },
        "b"
      )
      .from(
        "#page5 #card1 .sub-head-div h3",
        {
          transform: "translateY(100%)",
        },
        "b"
      );
  });
  return (
    <div
      id="page5"
      className="relative h-screen w-full font-sans p-0 px-8 bg-white"
    >
      <div
        id="pg5-header"
        className="w-full h-[15vh] flex items-center justify-center"
      >
        <h1 className="text-6xl">
          Why to adopt <span className="text-[#3771fc]">HeAR</span> ?
        </h1>
      </div>
      <div id="cards-wrapper" className="w-full h-[80vh] relative">
        <div
          id="pagination-div"
          className="w-12 h-12 absolute top-1/2 left-[97.4%] z-10 flex flex-col items-center justify-between"
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              id={`circle-${num}`}
              className={`w-2 h-2 rounded-full border border-black ${
                num === 1 ? "bg-black" : ""
              }`}
            ></div>
          ))}
        </div>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            id={card.id}
            className={`card absolute w-full h-full p-8 flex rounded-3xl ${
              card.bgColor
            } ${index === 0 ? "z-20" : index === 1 ? "z-30" : "z-40"}`}
          >
            <div
              id="left"
              className="w-1/2 h-full flex flex-col justify-between"
            >
              <div id="upper" className="flex flex-col gap-4">
                <div
                  id="icon"
                  className="w-10 h-10 bg-black rounded-lg flex items-center justify-center"
                >
                  <BotIcon
                    name={card.icon}
                    className="text-2xl text-white font-thin"
                  />
                </div>
                <div id="text">
                  {card.text.map((line, i) => (
                    <div
                      key={i}
                      id={`text-${i + 1}`}
                      className="text-div overflow-hidden"
                    >
                      <h5 className="text-lg font-medium">{line}</h5>
                    </div>
                  ))}
                </div>
              </div>
              {card.subHead && (
                <div id="sub-head">
                  {card.subHead.map((line, i) => (
                    <div
                      key={i}
                      id={`sub-head-${i + 1}`}
                      className="sub-head-div overflow-hidden"
                    >
                      <h3 className="text-2xl">{line}</h3>
                    </div>
                  ))}
                </div>
              )}
              <div id="heading">
                {card.heading.map((line, i) => (
                  <div
                    key={i}
                    id={`heading-${i + 1}`}
                    className="head-div overflow-hidden"
                  >
                    <h1
                      className="text-6xl font-medium leading-tight"
                      dangerouslySetInnerHTML={{ __html: line }}
                    ></h1>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="right"
              className="w-1/2 h-full flex items-end justify-center rounded-lg bg-white"
            >
              <div
                id="video"
                className="w-full h-full bg-transparent flex items-center justify-center"
              >
                <video
                  loop
                  autoPlay
                  muted
                  src={card.video}
                  className="w-full h-full object-contain mix-blend-hard-light"
                ></video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CanvasVideo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);

    const frameCount = 206;
    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 1 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    const ctl = gsap.timeline({
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#canvas-card>canvas`,
        start: `top top`,
        end: `300% top`,
        scroller: `body`,
      },
    });

    ctl
      .to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        onUpdate: render,
      })
      .to(canvas, {
        transform: "scale(.2)",
        opacity: 0,
        top: "11%",
        left: "-2.3%",
        width: "88%",
      });

    images[1].onload = () => {
      ScrollTrigger.refresh();
      render();
    };

    function render() {
      scaleImage(images[imageSeq.frame], context!);
    }

    ScrollTrigger.create({
      trigger: "#canvas-card",
      pin: true,
      scroller: `body`,
      start: `top top`,
      end: `200% top`,
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });
  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

function files(index: number): string {
  return `./canvas/canvas (${index + 1}).png`;
}

function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

const ChatImage = () => {
  return (
    <>
      <img src="/imgs/iPad Pro 11 Inches.png" alt="Iphone" />
      <div id="chat">
        <div className="message">
          <div className="wrap">
            <p>
              Hi, AI Assistant. I&apos;ve just recorded a cough sound from
              Patient X. Can you analyze it for me?
            </p>
          </div>
        </div>
        <div className="message">
          <div className="wrap">
            <p>
              Of course, Doctor. Please upload the audio file, and I&apos;ll
              start the analysis.
            </p>
          </div>
          <div className="profile"></div>
        </div>
        <div className="message">
          <div className="wrap">
            <img src="/imgs/canvas-cover.png" alt="Cover" />
          </div>
        </div>
        <div className="message">
          <div className="wrap">
            <p>Thank you. Analyzing the cough sound now…</p>
          </div>
          <div className="profile"></div>
        </div>
        <div className="message">
          <div className="wrap">
            <h5>✦ Based on this analysis, these are the next steps</h5>
            <p>
              I recommend performing a sputum test for TB to confirm the
              diagnosis. Additionally, a chest X-ray might be useful to assess
              any lung.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const RingsComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const smallRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
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
      <NextImage
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

const ProductDisplay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [productFlag, setProductFlag] = React.useState<"product1" | "product2">(
    "product1"
  );
  const [productInfo, setProductInfo] = React.useState({
    title: "Extrapulmonary tuberculosis",
    description:
      "Extrapulmonary tuberculosis is tuberculosis within a location in the body other than the lungs. It accounts for an increasing fraction of active cases",
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "top 0%",
          scrub: 1,
        },
      });

      tl.from(".product-img1", {
        top: "-100%",
        opacity: 0,
        filter: "blur(10px)",
      }).from(".product-title, .product-description", {
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        left: e.clientX - 40,
        top: e.clientY - 40,
        scale: 1,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        duration: 0.3,
      });
    }
  };

  const switchProduct = () => {
    const tl = gsap.timeline();

    if (productFlag === "product1") {
      tl.to(
        containerRef.current,
        {
          backgroundImage: "linear-gradient(to bottom right, #FB0408, #ba0407)",
        },
        "a"
      )
        .to(
          ".product-img1",
          {
            top: "-150%",
            opacity: 0,
            ease: "power1.in",
            onComplete: () => {
              gsap.set(".product-img1", { top: "100%" });
            },
          },
          "a"
        )
        .to(".product-img2", {
          top: "-50%",
          opacity: 1,
        });

      setProductFlag("product2");
      setProductInfo({
        title: "Pulmonary tuberculosis",
        description:
          "The most common symptom in tuberculosis of the lung is fever. Fever can be a low-grade fever that rarely crosses 100 °F",
      });
    } else {
      tl.to(
        containerRef.current,
        {
          backgroundImage: "linear-gradient(to bottom right, #3c4ef3, #182ef3)",
        },
        "a"
      )
        .to(
          ".product-img2",
          {
            top: "-150%",
            opacity: 0,
            ease: "power1.out",
            onComplete: () => {
              gsap.set(".product-img2", { top: "100%" });
            },
          },
          "a"
        )
        .to(".product-img1", {
          top: "-50%",
          opacity: 1,
        });

      setProductFlag("product1");
      setProductInfo({
        title: "Extrapulmonary tuberculosis",
        description:
          "Extrapulmonary tuberculosis is tuberculosis within a location in the body other than the lungs. It accounts for an increasing fraction of active cases",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#3c4ef3] to-[#182ef3]"
    >
      <div className="relative h-full w-full pt-2">
        <div className="absolute inset-0">
          <img
            src="/imgs/backtria_overlay.jpg"
            alt=""
            className="h-full w-full object-cover mix-blend-soft-light opacity-50"
          />
        </div>
        <div className="relative mt-16 flex overflow-x-hidden">
          <h1 className="ml-4 whitespace-nowrap text-[16vw] text-white font-medium animate-slide">
            Extrapulmonary tuberculosis
          </h1>
          <h1 className="ml-4 whitespace-nowrap text-[16vw] text-white font-medium animate-slide">
            Extrapulmonary tuberculosis
          </h1>
        </div>
        <div
          ref={productsRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70vh] w-1/2 rounded-t-lg bg-white"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={switchProduct}
        >
          <div className="relative flex flex-col items-center justify-center h-full text-center mt-24 px-8">
            <h1 className="product-title text-5xl font-medium mb-4">
              {productInfo.title}
            </h1>
            <p className="product-description text-lg font-light w-3/5 mb-8">
              {productInfo.description}
            </p>
            <button className="bg-gradient-to-r from-[#0844ff] to-[#4d86f9] text-white px-16 py-5 rounded-full transition-all duration-300 hover:bg-transparent hover:text-[#4285f4] hover:border hover:border-[#4285f4]">
              Know more to explore
            </button>
          </div>
          <img
            className="product-img1 absolute top-[-50%] h-full w-full scale-[0.8] object-contain pointer-events-none"
            src="/imgs/backtria_img2.png"
            alt=""
          />
          <img
            className="product-img2 absolute top-[120%] h-full w-full scale-[0.8] object-contain pointer-events-none"
            src="/imgs/backtria_img1.png"
            alt=""
          />
        </div>
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 h-20 w-20 scale-0 bg-black rounded-full flex items-center justify-center"
      >
        <h3 className="text-sm font-medium text-white">NEXT</h3>
      </div>
    </div>
  );
};

const Advantages: React.FC = () => {
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

const LastFooter: React.FC = () => {
  return (
    <div className="fixed left-0 bottom-0 min-h-screen w-full -z-50 p-8">
      <div id="strip" className="w-full h-80 absolute top-0 left-0"></div>
      <h1 className="text-8xl leading-none whitespace-nowrap text-[#217bfe] text-center">
        Hearing Disease
      </h1>
      <p className="text-4xl font-[bold] text-center text-[#c4c4c4] mt-4">
        Before We See It
      </p>
      <div className="relative w-full h-[55vh] bg-[#1e1e1e] mt-8 p-32 pt-8 pb-0 overflow-hidden">
        <div className="relative text-white flex items-center gap-4">
          <h3 className="text-base font-medium">Follow us</h3>
          <Instagram className="w-8 h-8 bg-white text-black p-1 rounded-full" />
          <Youtube className="w-8 h-8 bg-white text-black p-1 rounded-full" />
          <Twitter className="w-8 h-8 bg-white text-black p-1 rounded-full" />
          <Facebook className="w-8 h-8 bg-white text-black p-1 rounded-full" />
          <Linkedin className="w-8 h-8 bg-white text-black p-1 rounded-full" />
        </div>
        <div className="relative w-full h-px bg-[#dadce0] mt-8"></div>
        <div className="relative w-full flex justify-between text-[#5f6368] font-medium mt-4">
          <div className="font-[thin] relative flex flex-col gap-4">
            <h3>Application security</h3>
            <h3>Unwanted software policy</h3>
            <h3>Extended workforce</h3>
            <h3>Responsible supply chain</h3>
            <h3>Software principles</h3>
          </div>
          <div className="font-[thin] relative flex flex-col gap-4">
            <h3>Contact us</h3>
            <h3>Investor relations</h3>
            <h3>Locations</h3>
            <h3>Careers</h3>
          </div>
        </div>
        <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-9xl bg-gradient-to-b from-[#999999] to-[#99999942] bg-clip-text text-transparent">
          Google heAR AI
        </h1>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Loader />
      <Page1 />
      <Page2Video />
      <Page3 />
      <Page5 />
      <div id="canvas-card">
        <CanvasVideo />
        <ChatImage />
      </div>
      <RingsComponent />
      <ProductDisplay />
      <Advantages />
      <div
        id="page8"
        className="relative h-screen w-full bg-transparent pointer-events-none"
      ></div>
      <LastFooter />
    </>
  );
}
