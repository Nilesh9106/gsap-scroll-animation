"use client";
import CanvasVideo from "@/components/hear/CanvasVideo";
import ChatImage from "@/components/hear/ChatImage";
import Page1 from "@/components/hear/Page1";
import Page2Video from "@/components/hear/Page2Video";
import Page3 from "@/components/hear/Page3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <>
      <Page1 />
      <Page2Video />
      <Page3 />
      <div id="canvas-card">
        <CanvasVideo />
        <ChatImage />
      </div>
    </>
  );
}
