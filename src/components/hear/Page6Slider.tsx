import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default ProductDisplay;
