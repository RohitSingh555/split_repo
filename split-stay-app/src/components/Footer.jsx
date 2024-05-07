import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { HomeButtons_Solid } from "./HomeButtons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 pt-12 pb-6 ">
      <hr className="border-1 border-gray-300 opacity-30"></hr>
      <div className="container flex flex-col lg:flex-row justify-between py-12 mx-auto space-y-12 lg:space-y-0">
        <div className="lg:w-64">
          <Link rel="noopener noreferrer" href="#" className="flex  pb-5">
            {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            <h2 className=" font-bold text-2xl lg:text-4xl">SplitStay</h2>
          </Link>
          <p className="max-w-sm text-gray-500 lg:max-w-none">
            Wow this project is so awesome! Let me tell you why right here,
            right now.
          </p>
          {/* <div className="flex justify-start space-x-3 mt-4  text-2xl">
            <Link
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center "
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center "
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center "
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center "
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center "
            >
              <FontAwesomeIcon icon={faInfinity} />
            </Link>
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-y-12 lg:w-2/3 lg:grid-cols-3">
          <div className="space-y-5">
            {/* <h3 className="tracking-wide uppercase font-bold text-lg">
              Company
            </h3> */}
            <ul className="space-y-3">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  How it Works
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            {/* <h3 className="tracking-wide uppercase font-bold text-lg">Terms</h3> */}
            <ul className="space-y-3">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Facebook
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <ul className="space-y-3">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Policy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <form className="mt-6">
              <label htmlFor="UserEmail" className="sr-only">
                Email
              </label>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Get notified of updates"
                  className="w-full sm:w-3/4 rounded-md p-2 sm:text-sm"
                />
                <HomeButtons_Solid
                  className="py-1 sm:py-0 sm:w-2/4"
                  onClick={() => console.log("Login clicked")}
                >
                  Subscribe
                </HomeButtons_Solid>
              </div>
            </form>
            {/* <p className="mt-4 max-w-xs text-xs text-gray-300 lg:max-w-none">
              Will send you weekly updates on popular trips
            </p> */}
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-2  opacity-10"></hr>
      <div className="py-6 text-sm text-center  md:pb-4">
        Copyright @ SplitStay 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
