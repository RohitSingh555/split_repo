import React from "react";
import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";

const HeroSection = () => {
  return (
    <section className="dark:bg-gray-900 pb-2 bg-HeroSectionBackgroundColor pt-7 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Image at the top in mobile view */}
        <div className="lg:hidden lg:col-span-7 md:pt-24 pt-10 lg:flex justify-end">
          <img src="../../hero.png" alt="mockup" />
        </div>

        {/* Content */}
        <div className="mr-auto place-self-top lg:col-span-5 pt-0 md:pt-24 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Explore more,<br/> for less
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
            SplitStay is a trusted marketplace and social network for shared lodging.
          </p>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5">
            <HomeButtons_Solid className="py-4 px-14" onClick={() => console.log('Login clicked')}>
              Find a Stay
            </HomeButtons_Solid>
            <HomeButtons_Hollow className="py-3 px-10" onClick={() => console.log('Signup clicked')}>
              See how it works
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
}

export default HeroSection;
