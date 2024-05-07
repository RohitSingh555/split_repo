import React from "react";
// import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";
import PentagonImage from "./PentagonImage";

const HeroSection = () => {
  return (
    <section className=" pb-2 bg-HeroSectionBackgroundColor pt-7 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto xl:gap-0 lg:py-16 ">
        <div className="relative w-full h-80 md:h-auto hidden xl:flex">
          {/* Top Left */}
          <PentagonImage
            image="/Image-1.png"
            style={{ position: "absolute", top: "10px", left: "10px" }}
          />

          {/* Top Right */}
          <PentagonImage
            image="/Image-1.png"
            style={{ position: "absolute", top: "60px", right: "160px" }}
          />

          {/* Bottom Left */}
          <PentagonImage
            image="/Image-1.png"
            style={{ position: "absolute", bottom: "110px", left: "80px" }}
          />

          {/* Bottom Right */}
          <PentagonImage
            image="/Image-1.png"
            style={{ position: "absolute", bottom: "40px", right: "110px" }}
          />

          {/* Center */}
          <PentagonImage
            image="/Image-1.png"
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Content */}
          <div className="relative top-0 left-0 w-full h-full flex flex-col justify-center items-center py-40">
            <h1 className="text-6xl md:text-8xl text-center font-medium text-PrimaryColor">
              Connecting Trusted Travelers for Shared Accommodation
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
