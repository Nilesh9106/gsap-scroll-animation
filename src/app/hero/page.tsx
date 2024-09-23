"use client";

import Model from "@/components/3d-model/HeroModel";

const Page = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <Model />
        <div className="absolute pointer-events-none top-0 left-0 w-full h-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-center text-white font-semibold">
            IS YOUR BIG IDEA READY TO GO WILD?
          </h2>
          <div className="flex flex-col mt-3 font-semibold">
            <h1 className="text-[16vh] text-white tracking-tighter  text-center">
              Let&apos;s Work
            </h1>
            <h1 className="text-[16vh] text-white  text-center">Together!</h1>
          </div>
        </div>
      </div>
      {/* <div className="h-screen flex justify-center items-center bg-neutral-900">
        <h1 className="text-[30vh] text-white">HERO</h1>
      </div> */}
    </>
  );
};

export default Page;
