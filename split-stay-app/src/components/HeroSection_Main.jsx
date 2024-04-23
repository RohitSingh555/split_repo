import React from "react";
import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";

const HeroSection_Main = () => {
  return (
    <section className="dark:bg-gray-900 pb-2 bg-HeroSectionBackgroundColor pt-7 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Image at the top in mobile view */}
        <div className="lg:hidden lg:col-span-7 md:pt-24 pt-10 lg:flex justify-end">
          <img src="../../hero.png" alt="mockup" />
        </div>

        {/* Content */}
        <div className="mr-auto place-self-top lg:col-span-5 pt-0 md:pt-24 ">
          <h1 className="max-w-3xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Discover <span className="text-Primarycolor">amazing</span> stays{" "}
            <span className="text-Primarycolor">with</span> splitstay
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
            SplitStay is a trusted marketplace and social network for shared
            lodging 1,480,086 shared lodging options around the world are
            waiting for you!.
          </p>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
            <HomeButtons_Solid
              className="py-4 px-14"
              onClick={() => console.log("Login clicked")}
            >
              Browse Experiences
            </HomeButtons_Solid>
            <HomeButtons_Hollow
              className="py-3 px-10"
              onClick={() => console.log("Signup clicked")}
            >
              Propose an Experience
            </HomeButtons_Hollow>
          </div>
        </div>

        {/* Image at the right in desktop view */}
        <div className="hidden lg:block lg:col-span-7 lg:flex justify-end">
          <img src="../../hero.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection_Main;
