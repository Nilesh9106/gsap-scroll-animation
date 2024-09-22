"use client";

import Model from "@/components/3d-model/HeroModel";

const Page = () => {
  return (
    <>
      <Model />
      <div className="h-screen flex justify-center items-center bg-neutral-900">
        <h1 className="text-[30vh] text-white">Portfolio</h1>
      </div>
    </>
  );
};

export default Page;
