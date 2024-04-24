import React from "react";
import { Outlet, Link } from "react-router-dom";
import EmailInput from "../../components/FormComponents/EmailInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../../components/HomeButtons";
import Slides from "../../components/FormComponents/SlideComponent";

const SignupPage = () => {
  return (
    <div className="md:py-40 py-32">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <div className="p-0 px-10">
            {/* <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse pb-8"
            >
              // {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            {/* </Link> */}
            <h1 className="text-Primarycolor font-bold text-5xl">Sign Up</h1>

            <EmailInput type={"name"} label={"Full Name"} />
            <EmailInput type={"email"} label={"Email Address"} />
            <PasswordInput label={"Password"} />
            <PasswordInput label={"Confirm Password"} />
            <div className="mt-4">
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
            <HomeButtons_Solid
              className=" mt-8 px-10 w-full"
              onClick={() => console.log("Login clicked")}
            >
              Agree and Register
            </HomeButtons_Solid>
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
                Facebook
              </HomeButtons_Hollow>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 flex justify-around font-medium items-center fw-lighter w-36 "
                onClick={() => console.log("Signup clicked")}
              >
                <img src="/apple.png"></img>
                Apple
              </HomeButtons_Hollow>
              <HomeButtons_Hollow
                className="py-1 px-4 mt-10 fw-lighter font-medium flex justify-around w-36"
                onClick={() => console.log("Signup clicked")}
              >
                <img src="/google.png"></img>
                Google
              </HomeButtons_Hollow>
            </div>
          </div>
          <div className=" text-center pt-4">
            <p>
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-Primarycolor">Log in now</span>
              </Link>
            </p>
          </div>
          <div className="flex justify-between flex-row pt-20 pb-16 px-6 mt-10 bg-Graybg text-TextFooterLogin ">
            <p>splitstay.com © 2024</p>
            <Link>Privacy Policy</Link>
          </div>
        </div>
        <div className="relative hidden lg:block lg:w-1/2">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/signup_bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter:
                "brightness(60%) contrast(120%) sepia(10%) hue-rotate(-20deg)",
              boxShadow: "rgb(255 183 147 / 20%) 0px 0px 0px 1000px inset",
            }}
          ></div>
          <Slides
            text={{
              heading: "Welcome to Splitstay",
              description:
                "A trusted marketplace and social network for shared lodging ",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
