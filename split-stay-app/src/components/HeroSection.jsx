import React from "react";
// import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";
import PentagonImage from "./PentagonImage";

const HeroSection = () => {
  return (
    <section className=" pb-2 bg-HeroSectionBackgroundColor pt-7 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-1 mx-auto xl:gap-0 lg:py-4 ">
        <div className="relative w-full pt-14 lg:pt-0 md:h-auto ">
          <div className="hidden xl:flex pt-24 xl:pt-4">
            {/* Top Left */}
            <PentagonImage
              image="/Image-1.png"
              style={{ position: "absolute", top: "10px", left: "90px" }}
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
          </div>

          {/* Content */}
          <div className="relative top-0 left-0 w-full lg:h-full flex flex-col justify-center items-center py-10 lg:py-40">
            <h1 className="text-3xl lg:text-6xl max-w-4xl  text-center font-medium text-PrimaryColor">
              Connecting Trusted<br></br> Travelers for<br></br> Shared
              Accommodation
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
