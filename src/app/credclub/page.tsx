"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CredClub = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 298;
    const images: HTMLImageElement[] = [];

    const imageSeq = { frame: 1 };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/credclub/feature_${i + 1}.jpg`;
      images.push(img);
    }

    const render = () => {
      scaleImage(images[imageSeq.frame], context!);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 2,
        trigger: `#canvas-card>canvas`,
        start: `top top`,
        end: `350% top`,
        pin: true,
        scroller: `body`,
      },
    });

    tl.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      onUpdate: render,
    });

    images[1].onload = render;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div>
      <div id="canvas-card" className="w-full h-dvh relative z-10">
        <canvas
          className="absolute scale-100 z-20 h-dvh w-full"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};

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

export default CredClub;
