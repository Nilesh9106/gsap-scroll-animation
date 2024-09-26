import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BotIcon } from "lucide-react";

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

const Page5 = () => {
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

export default Page5;
