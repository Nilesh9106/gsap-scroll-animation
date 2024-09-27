import React from "react";
import { Instagram, Youtube, Twitter, Facebook, Linkedin } from "lucide-react";

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

export default LastFooter;
