import React from "react";
import { Outlet, Link } from "react-router-dom";
import EmailInput from "../../components/FormComponents/EmailInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../../components/HomeButtons";
import Slides from "../../components/FormComponents/SlideComponent";

const LoginPage = () => {
  return (
    <div className="md:py-40 py-20">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <div className="p-8 ">
            {/* <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse pb-8"
            >
              <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" />
            </Link> */}
            <h1 className=" font-bold text-2xl lg:text-4xl">
              Welcome back! Glad to see you, Again!
            </h1>
            <EmailInput type={"email"} label={"Email Address"} />
            <PasswordInput label={"Password"} />
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="form-checkbox h-4 w-4 text-goldenrod dark:text-goldenrod"
                  />

                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="#"
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Link to={"/preferences"}>
              <HomeButtons_Solid
                className=" mt-16 px-10 w-full"
                onClick={() => console.log("Login clicked")}
              >
                Login
              </HomeButtons_Solid>
            </Link>
            <div className="mt-8 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <Link to="#" className="text-xs text-center text-gray-500">
                or continue with
              </Link>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="flex justify-center gap-4">
              <HomeButtons_Hollow
                className="py-1 px-1 mt-10 flex justify-around font-medium items-center fw-lighter w-40"
                onClick={() => console.log("Signup clicked")}
              >
                <img src="/fb.png"></img>
                <span className="hidden lg:block">Facebook</span>
              </HomeButtons_Hollow>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 flex justify-around font-medium items-center fw-lighter w-36 "
                onClick={() => console.log("Signup clicked")}
              >
                <img src="/apple.png"></img>
                <span className="hidden lg:block">Apple</span>
              </HomeButtons_Hollow>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 fw-lighter font-medium flex justify-around w-36"
                onClick={() => console.log("Signup clicked")}
              >
                <img src="/google.png"></img>
                <span className="hidden lg:block">Google</span>
              </HomeButtons_Hollow>
            </div>
          </div>
          <div className=" text-center pt-10">
            <p>
              Already have an account?{" "}
              <Link to={"/signup"}>
                <span className="text-Primarycolor">Register Now</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-between  pt-20 pb-16 px-6 mt-10 bg-Graybg text-TextFooterLogin ">
            <p>splitstay.com © 2024</p>
            <Link to={""}>Privacy Policy</Link>
          </div>
        </div>
        <div className="relative hidden lg:block lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/login_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter:
                "brightness(60%) contrast(120%) sepia(10%) hue-rotate(-20deg)",
              boxShadow: "rgb(209 60 10 / 20%) 0px 0px 0px 1000px inset",
            }}
          ></div>
          <Slides
            text={{
              heading: "Chat & Connect Seamlessly",
              description:
                "Built-in text, voice, video & calendar synchronization.",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
