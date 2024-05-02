import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailInput from "../../components/FormComponents/EmailInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import {
  HomeButtons_Solid,
  HomeButtons_Hollow,
} from "../../components/HomeButtons";
import Slides from "../../components/FormComponents/SlideComponent";

const AuthEmailPage = () => {
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [emailError, setemailError] = useState("");

  const navigate = useNavigate();
  const handleGenerateVerificationCode = () => {
    console.log("email", email);
    if (email.endsWith("@harvard.edu") || email.endsWith("@stanford.edu")) {
      setShowVerification(true);
    } else {
      setShowVerification(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("verication code ===>", verificationCode);
    if (verificationCode === "Verification") {
      console.log("please inside");
      navigate("/experiences");
    } else {
      alert("Enter the email ending with @harvard.edu || @stanford.edu");
    }
  };

  return (
    <div className="md:py-40 py-20">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <div className="p-8 ">
            <h1 className=" font-bold text-2xl lg:text-4xl">
              Provide Work Email or School Email
            </h1>
            <form onSubmit={handleSubmit}>
              <EmailInput
                type={"email"}
                label={"Email Address"}
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                error={emailError}
                required
              />
              {!showVerification && (
                <HomeButtons_Solid
                  className=" mt-16 px-10 w-full"
                  onClick={handleGenerateVerificationCode}
                >
                  Generate Verification Code
                </HomeButtons_Solid>
              )}
              {showVerification && (
                <>
                  <EmailInput
                    type={"text"}
                    label={"Verification Code"}
                    value={verificationCode}
                    handleChange={(e) => setVerificationCode(e.target.value)}
                    name="verficationCode"
                  />
                  <HomeButtons_Solid
                    className=" mt-16 px-10 w-full"
                    onClick={handleSubmit}
                  >
                    Submit
                  </HomeButtons_Solid>
                </>
              )}
            </form>
            <Link to={"/preferences"}>
              <HomeButtons_Solid
                className=" mt-16 px-10 w-full"
                onClick={() => console.log("Skip clicked")}
              >
                Skip
              </HomeButtons_Solid>
            </Link>
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

export default AuthEmailPage;
