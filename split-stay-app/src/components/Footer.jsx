import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faFacebookMessenger,
// } from "@fortawesome/free-brands-svg-icons";
// import { HomeButtons_Solid } from "./HomeButtons";
// import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      date: new Date().getTime(),
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/18820054/3jzqjq7/",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Subscription successful!");
        setEmail("")
        alert("Newsletter subscribed. Thanks")
      } else {
        console.error("Failed to subscribe:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <footer className=" pt-12 pb-6 container m-auto px-4">
      <hr className="border-1 border-gray-300 opacity-30"></hr>
      <div className="max-w-7xl flex flex-col lg:flex-row justify-between py-12 mx-auto space-y-12 lg:space-y-0">
        <div className="lg:w-64">
          <Link rel="noopener noreferrer" href="#" className="flex  pb-5">
            {/* <img src="/SplitStay.png" className="h-10" alt="SplitStay Logo" /> */}
            <h2 className=" font-medium text-2xl lg:text-4xl">SplitStay</h2>
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
                <a rel="noopener noreferrer" href="#top">
                  Home
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#works">
                  How it Works
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            {/* <h3 className="tracking-wide uppercase font-bold text-lg">Terms</h3> */}
            <ul className="space-y-3">
              <li>
                <a rel="noreferrer" href="https://www.facebook.com/">
                  Facebook
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="https://www.instagram.com/">
                  Instagram
                </a>
              </li>
              <li>
                <a rel="noreferrer" href="https://www.linkedin.com/">
                  LinkedIn
                </a>
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
            <form className="mt-6" onSubmit={handleSubmit}>
              <label htmlFor="UserEmail" className="sr-only">
                Email
              </label>
              <div className="flex flex-col max-w-96 lg:w-full gap-2 sm:flex-row">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="Get notified of updates"
                  className="w-full sm:w-3/4 border-LabelEXP border rounded-md p-2 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full py-1 sm:py-0 sm:w-2/4  px-4 border font-medium border-Overlay rounded-md shadow-sm bg-Overlay hover:bg-LabelEXP focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
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
        Copyright @ SplitStay 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
