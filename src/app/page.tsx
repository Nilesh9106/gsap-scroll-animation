"use client";
import Advantages from "@/components/hear/Advantages";
import CanvasVideo from "@/components/hear/CanvasVideo";
import ChatImage from "@/components/hear/ChatImage";
import LastFooter from "@/components/hear/Footer";
import Loader from "@/components/hear/Loader";
import Page1 from "@/components/hear/Page1";
import Page2Video from "@/components/hear/Page2Video";
import Page3 from "@/components/hear/Page3";
import Page5 from "@/components/hear/Page5";
import ProductDisplay from "@/components/hear/Page6Slider";
import RingsComponent from "@/components/hear/RingsAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);
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
