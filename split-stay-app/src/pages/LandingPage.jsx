// Home.jsx
import { HomeButtons_Solid } from "../components/HomeButtons";
import "../styles/home.css";
import HeroSection_Main from "../components/HeroSection_Main";
import Heading from "../components/Heading";
import UserCard from "../components/UserComponents/UserCard";

const MainPage = () => {
  return (
    <>
      <div className="container max-w-screen-xl m-auto">
        <HeroSection_Main className="bg-LandingPageBg" />

        <div className=" Section2 px-5 bg-LandingPageBg">
          <Heading className="text-4xl pb-12">Join the experience</Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <div className="relative col-span-2 lg:col-span-1">
              <img
                src="/barcelona.png"
                alt="Placeholder"
                className="w-full h-full object-cover rounded-md"
              ></img>
              <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0 transition-opacity">
                <div className=" bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <h2 className="text-sm font-normal text-gray-800">
                    Barcelona
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between hidden md:block col-span-2 lg:col-span-1">
              <div className="relative mb-4">
                <img
                  src="/bali.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover rounded-md"
                ></img>
                <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0  transition-opacity">
                  <div className=" items-center bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <h2 className="text-sm font-normal text-gray-800">Bali</h2>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/button.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover rounded-md"
                ></img>
                <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0  transition-opacity">
                  <div className=" bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <h2 className="text-sm font-normal text-gray-800">
                      Button
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative col-span-2 lg:col-span-1">
              <img
                src="/costarita.png"
                alt="Placeholder"
                className="w-full h-full object-cover rounded-md"
              ></img>
              <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0  transition-opacity">
                <div className=" bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <h2 className="text-sm font-normal text-gray-800">
                    Costa Rita
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between hidden md:block col-span-2 lg:col-span-1">
              <div className="relative mb-4">
                <img
                  src="/switzerland.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover rounded-md"
                ></img>
                <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0  transition-opacity ">
                  <div className=" bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <h2 className="text-sm font-normal text-gray-800">
                      Switzerland
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative ">
                <img
                  src="/italy.png"
                  alt="Placeholder"
                  className="w-full h-full object-cover rounded-md"
                  style={{ minHeight: "245px" }}
                ></img>
                <div className="absolute inset-0 flex items-end justify-start text-white pl-4 pb-4 opacity-100 hover:opacity-0  transition-opacity">
                  <div className=" bg-gray-300 bg-Overlay items-center rounded-2xl flex px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4c3.865 0 7 3.134 7 7 0 4.062-7 13-7 13S5 15.062 5 11c0-3.866 3.135-7 7-7zm0 10a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <h2 className="text-sm font-normal text-gray-800">Italy</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" Section3 bg-LandingPageBg pt-24 px-5">
          <Heading className="text-4xl pb-12">Travelers you can trust</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-5">
            <UserCard
              imageUrl="/Image-1.png"
              rating="4.9"
              name="Gio"
              age="36"
              occupation="Product Manager"
              education="Harvard University"
              location="Portland, Oregon USA"
              className=""
            />
            <UserCard
              imageUrl="/Image-2.png"
              rating="4.9"
              name="Gio"
              age="36"
              occupation="Product Manager"
              education="Harvard University"
              location="Portland, Oregon USA"
              className=""
            />
            <UserCard
              imageUrl="/Image.png"
              rating="4.9"
              name="Gio"
              age="36"
              occupation="Product Manager"
              education="Harvard University"
              location="Portland, Oregon USA"
              className=""
            />
            <UserCard
              imageUrl="/Image-1.png"
              rating="4.9"
              name="Gio"
              age="36"
              occupation="Product Manager"
              education="Harvard University"
              location="Portland, Oregon USA"
              className=""
            />
            <UserCard
              imageUrl="/Image.png"
              rating="4.9"
              name="Gio"
              age="36"
              occupation="Product Manager"
              education="Harvard University"
              location="Portland, Oregon USA"
              className=""
            />
          </div>
        </div>
        <div className=" Section2 mt-36 lg:mt-44 mb-12 lg:mb-32 px-5">
          <div className="rounded border border-Overlay bg-Overlay py-6 items-center px-8 flex flex-row">
            <div className="  flex flex-col lg:flex-row items-center w-full justify-between">
              <div className=" flex flex-col items-center lg:items-start pb-8 lg:pb-0 lg:flex-row gap-8">
                <div className="text-Primarycolor ">
                  <img src="/hand.png"></img>
                </div>
                <div>
                  <h4 className="font-bold">Exclusive deals!</h4>{" "}
                  <p>
                    Join our Travel Club to access secret offers and best prices
                    for amazing stays!
                  </p>
                </div>
              </div>
              <HomeButtons_Solid
                className="px-24"
                style={{
                  paddingRight: "65px",
                  paddingLeft: "65px",
                  color: "black",
                }}
                onClick={() => console.log("Login clicked")}
              >
                Sign Up
              </HomeButtons_Solid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
