import Spline from "@splinetool/react-spline";
import Image from "next/image";

const Page1 = () => {
  return (
    <div className="h-screen w-full bg-white overflow-hidden">
      <div className="relative h-full w-full p-4 text-center">
        <div
          className="flex items-center justify-between w-full p-6 bg-white/90 rounded-lg shadow-md"
          id="navbar"
        >
          <Image
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
        <Image
          className="absolute left-[-10%] top-1/2 w-1/5 transform rotate-[-30deg]"
          src="/imgs/3D Image - 12.png"
          alt="Left Ring"
          width={300}
          height={300}
          id="leftring"
        />
        <Image
          className="absolute right-[-15%] top-1/4 w-1/3 transform rotate-[-50deg]"
          src="/imgs/3D Image - 11.png"
          alt="Right Ring"
          width={400}
          height={400}
          id="rightring"
        />
        <h1 className="mt-8 text-5xl font-semibold text-blue-600">
          Transforming Cough Sounds
        </h1>
        <h2 className="text-5xl font-semibold mt-3 text-blue-600">
          into Diagnostic Insights
        </h2>
        <p className="mt-4 text-gray-500 font-light text-lg w-1/3 mx-auto">
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

export default Page1;
