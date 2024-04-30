import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeButtons_Hollow, HomeButtons_Solid } from "./HomeButtons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HeroSection_Main = () => {
  return (
    <section className=" pb-2 bg-LandingPageBg pt-7 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:hidden lg:col-span-7 md:pt-24 pt-10 lg:flex justify-end">
          <img src="../../hero.png" alt="mockup" />
        </div>

        <div className="mr-auto place-self-top lg:col-span-5 pt-0 md:pt-24 ">
          <h1 className="max-w-3xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl ">
            Discover <span className="text-Primarycolor">amazing</span> stays{" "}
            <span className="text-Primarycolor">with</span> splitstay
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg ">
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
          <div className="flex justify-between shadow-md mt-5 lg:mt-20 p-4 rounded-md">
            <div className="">
              <p className=" text-black-50  text-sm">Location</p>
              <h4 className="font-bold">Anywhere</h4>
            </div>
            <div className="">
              <p className=" text-black-50  text-sm">When</p>
              <h4 className="font-bold">Anytime</h4>
            </div>
            <div className="">
              <p className=" text-black-50  text-sm">Who</p>
              <h4 className="font-bold">1 Guest</h4>
            </div>
            <div className="text-xl bg-Primarycolor px-5 py-3 rounded-full">
              <FontAwesomeIcon icon={faSearch} />
            </div>
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
